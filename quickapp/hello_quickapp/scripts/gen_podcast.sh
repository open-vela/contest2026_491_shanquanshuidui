#!/bin/bash
# gen_podcast.sh - 命令行生成播客内容
# 用法: bash /home/ubuntu/gen_podcast.sh [风格]
# 风格: warm / deep / energetic / story

STYLE="${1:-warm}"

case "$STYLE" in
    warm)     STYLE_DESC="温暖治愈，像深夜电台主播，语气温柔，有安抚感，150字以内" ;;
    deep)     STYLE_DESC="深度分析，专业心理学视角，有洞察力和启发性，200字以内" ;;
    energetic) STYLE_DESC="活力轻松，像朋友聊天，幽默有趣，有正能量，120字以内" ;;
    story)    STYLE_DESC="故事化叙事，用比喻和意象，有画面感，文艺范，180字以内" ;;
    *) echo "未知风格: $STYLE"; echo "可用: warm / deep / energetic / story"; exit 1 ;;
esac

export STYLE_DESC

echo "=========================================="
echo "  播客生成 - $STYLE"
echo "=========================================="
echo "生成中..."
echo ""

python3 -c "
import json, urllib.request, ssl, os

style_desc = os.environ.get('STYLE_DESC', '')
sys_prompt = '你是一个播客主播。用户数据：心率73bpm，血氧97%，压力等级37。对话背景：用户最近工作忙经常加班，心情不好感觉压力大，AI建议了4-7-8呼吸法放松。用户最后表示感觉好多了。'
user_prompt = '请把以上内容转化为一段播客风格的叙事文本，' + style_desc + '。直接输出播客内容，不要加标题或说明。'

data = json.dumps({
    'model': 'mimo-v2.5',
    'messages': [
        {'role': 'system', 'content': sys_prompt},
        {'role': 'user', 'content': user_prompt}
    ],
    'max_tokens': 800
}).encode()

req = urllib.request.Request(
    'https://token-plan-cn.xiaomimimo.com/v1/chat/completions',
    data=data,
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer tp-cktb90su0rxyg97mpqyxhpu8z3aol9j8y7onxh24nuwvrheq'
    }
)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    resp = urllib.request.urlopen(req, context=ctx, timeout=90)
    r = json.loads(resp.read())
    content = r['choices'][0]['message']['content']
    print(content)
except Exception as e:
    print('生成失败:', e)
"

echo ""
echo "=========================================="
echo "  用法: bash gen_podcast.sh warm|deep|energetic|story"
echo "=========================================="
