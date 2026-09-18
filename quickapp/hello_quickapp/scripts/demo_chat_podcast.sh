#!/bin/bash
# demo_chat_podcast.sh - 三轮对话 + 生成播客（SSH终端可见回复）
# 用法: bash /home/ubuntu/demo_chat_podcast.sh [风格]
# 风格: warm / deep / energetic / story (默认: warm)

STYLE="${1:-warm}"
export STYLE

echo "=========================================="
echo "  情感对话 + 播客生成 演示"
echo "=========================================="
echo ""

python3 << 'PYEOF'
import json, urllib.request, ssl, os, time, sys

API_KEY = "tp-cktb90su0rxyg97mpqyxhpu8z3aol9j8y7onxh24nuwvrheq"
LLM_URL = "https://token-plan-cn.xiaomimimo.com/v1/chat/completions"
MODEL = "mimo-v2.5"
STYLE = os.environ.get("STYLE", "warm")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def call_llm(messages, max_tokens=800):
    data = json.dumps({
        "model": MODEL,
        "messages": messages,
        "max_tokens": max_tokens
    }).encode()
    req = urllib.request.Request(LLM_URL, data=data, headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
    })
    resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    r = json.loads(resp.read())
    return r["choices"][0]["message"]["content"]

# AI角色设定
SYS_PROMPT = """你是一个温暖的AI情感陪伴助手，运行在智能手表上。
用户正在和你聊天分享生活。请用自然、温暖、有共情的方式回复。
回复要简洁（100-200字），像朋友聊天一样。
可以适当追问或表达关心，但不要过于冗长。"""

# 三轮对话
questions = [
    "今天在超市，看到虾还在跳，我站那儿看了半天",
    "主要是我外婆。她以前带我逛菜市场，挑虾不看个头，就看它跳不跳。说跳的才新鲜。",
    "今天聊的这些，能做成播客吗？"
]

conversation = []
all_messages = [{"role": "system", "content": SYS_PROMPT}]

replies = []

for i, q in enumerate(questions):
    print("==========================================")
    print(f"[{i+1}/4] 对话第{i+1}轮")
    print("==========================================")
    print()
    print(f"  用户: {q}")
    print()
    sys.stdout.flush()

    all_messages.append({"role": "user", "content": q})

    print("  AI思考中...")
    sys.stdout.flush()

    t0 = time.time()
    reply = call_llm(all_messages)
    elapsed = time.time() - t0

    print(f"  AI: {reply}")
    print(f"  (耗时 {elapsed:.1f}秒)")
    print()
    sys.stdout.flush()

    all_messages.append({"role": "assistant", "content": reply})
    replies.append(reply)

# 生成播客
print("==========================================")
print(f"[4/4] 基于对话生成播客 (风格: {STYLE})")
print("==========================================")
print()
print("  生成中...")
print()
sys.stdout.flush()

style_map = {
    "warm": "温暖治愈，像深夜电台主播，语气温柔，有安抚感，150字以内",
    "deep": "深度分析，专业心理学视角，有洞察力和启发性，200字以内",
    "energetic": "活力轻松，像朋友聊天，幽默有趣，有正能量，120字以内",
    "story": "故事化叙事，用比喻和意象，有画面感，文艺范，180字以内"
}
style_desc = style_map.get(STYLE, style_map["warm"])

dialogue_text = ""
for i, q in enumerate(questions):
    dialogue_text += f"用户: {q}\nAI: {replies[i]}\n\n"

podcast_sys = f"你是一个播客主播。以下是一段用户与AI助手的对话记录，请基于这段对话内容，生成一段播客风格的叙事文本。{style_desc}。直接输出播客内容，不要加标题或说明。"
podcast_user = f"对话记录如下:\n\n{dialogue_text}"

podcast = call_llm([
    {"role": "system", "content": podcast_sys},
    {"role": "user", "content": podcast_user}
], max_tokens=800)

print("==========================================")
print(f"  播客内容 ({STYLE})")
print("==========================================")
print()
print(podcast)
print()
print("==========================================")
print("  演示完成")
print("  用法: STYLE=变量 bash demo_chat_podcast.sh warm|deep|energetic|story")
print("==========================================")
PYEOF
