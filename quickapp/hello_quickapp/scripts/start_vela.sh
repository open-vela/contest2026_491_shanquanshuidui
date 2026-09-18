#!/bin/bash
# OpenVela 模拟器一键启动 + AI Agent + 应用部署脚本 v5
# 用法: bash ~/start_vela.sh [--no-deploy] [--skip-fonts]
# v5: 跳过 set_llm（配置文件已存在），直接后台启动 ai_agent

DEPLOY=true
SKIP_FONTS=false
for arg in "$@"; do
  case $arg in
    --no-deploy)  DEPLOY=false ;;
    --skip-fonts)  SKIP_FONTS=true ;;
  esac
done

cd /home/ubuntu/openvela

export DISPLAY=:1
export XAUTHORITY=/run/user/1000/gdm/Xauthority
export LD_LIBRARY_PATH="/home/ubuntu/openvela/prebuilts/emulator/linux-x86_64/lib64/gles_swiftshader:/home/ubuntu/openvela/prebuilts/emulator/linux-x86_64/lib64/qt/lib:/home/ubuntu/openvela/prebuilts/emulator/linux-x86_64/lib64:$LD_LIBRARY_PATH"

ADB=/home/ubuntu/emotion_sense_quickapp/node_modules/@miwt/adb/bin/linux/adb
RPK=/home/ubuntu/emotion_sense_quickapp/dist/com.disco.emotionsense.debug.1.0.0.rpk
PKG=com.disco.emotionsense

echo "[1/8] 检查模拟器..."
if screen -ls | grep -q vela; then
  echo "  已有模拟器，关闭中..."
  screen -S vela -X quit
  sleep 3
fi

echo "[2/8] 启动模拟器 (screen: vela)..."
screen -S vela -dm /home/ubuntu/openvela/prebuilts/emulator/linux-x86_64/qemu/linux-x86_64/qemu-system-aarch64 -vela -avd Vela_Generic_Device -show-kernel -gpu swiftshader_indirect -no-audio -no-boot-anim -kernel /home/ubuntu/openvela/nuttx/nuttx
echo "  等待 25 秒启动..."
sleep 25

if [ "$DEPLOY" = true ]; then
  echo "[3/8] 部署应用包..."
  $ADB -s emulator-5554 push $RPK /data/ 2>&1 | tail -1
  screen -S vela -X stuff "rm -rf /data/app/$PKG
"
  sleep 2
  rm -rf /tmp/emotion_app
  mkdir -p /tmp/emotion_app
  unzip -o $RPK -d /tmp/emotion_app/ > /dev/null 2>&1
  $ADB -s emulator-5554 push /tmp/emotion_app /data/app/$PKG 2>&1 | tail -1

  if [ "$SKIP_FONTS" = false ]; then
    echo "[4/8] 推送字体..."
    $ADB -s emulator-5554 push /home/ubuntu/font_extracted/font /data/font/ 2>&1 | tail -1
  else
    echo "[4/8] 跳过字体推送 (--skip-fonts)"
  fi

  echo "[5/8] 推送 Skills..."
  $ADB -s emulator-5554 push /home/ubuntu/emotion-interview.md /data/ai_agent/skills/ 2>&1 | tail -1
  $ADB -s emulator-5554 push /home/ubuntu/meme-nickname.md /data/ai_agent/skills/ 2>&1 | tail -1
  $ADB -s emulator-5554 push /home/ubuntu/chinese-inversion.md /data/ai_agent/skills/ 2>&1 | tail -1
else
  echo "[3/8] 跳过部署 (--no-deploy)"
  echo "[4/8] 跳过字体"
  echo "[5/8] 跳过 Skills"
fi

echo "[6/8] 后台启动 ai_agent (LLM 配置已存在)..."
screen -S vela -X stuff "ai_agent &
"
sleep 8

echo "[7/8] 启动快应用: vapp hap://app/$PKG"
screen -S vela -X stuff "vapp hap://app/$PKG
"
sleep 5

echo "[8/8] 验证..."
screen -S vela -X hardcopy /tmp/vela_screen.txt
echo "  屏幕末尾:"
tail -15 /tmp/vela_screen.txt

echo ""
echo "============================="
echo "  VNC: 192.168.218.131:5900"
echo "  密码: 123456"
echo ""
echo "  进入控制台: screen -r vela"
echo "  退出控制台: Ctrl+A 然后 D"
echo "  重启应用:   screen -S vela -X stuff 'vapp hap://app/com.disco.emotionsense\n'"
echo "  重启AI:     screen -S vela -X stuff 'kill <pid>; ai_agent &\n'"
echo "  AI 配置:    /data/ai_agent/config/config.json"
echo "  LLM 状态:   tp- Token Plan (已验证可用)"
echo "============================="
