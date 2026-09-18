# EmotionSense（情绪传感）

> 2026 首届 openvela AI 硬件开发者大赛 · 手表应用创新赛道

基于 openvela 端侧 AI Agent 的情绪健康访谈快应用。运行于 openvela 智能手表，通过实时心率、血氧、压力数据计算 ES3 情绪波动指数，当检测到情绪偏离时由 AI 主动发起共情访谈，对话内容可一键生成播客。

## 功能特性

- **生理感知**：实时采集心率 / 血氧 / 压力，自研 ES3 情绪融合算法
- **AI 访谈**：端侧 AI Agent + 自定义 Skill，生理信号触发主动对话
- **动态趋势**：7 天历史数据从 storage 动态加载，非静态 mock
- **播客生成**：对话内容自动生成播客文本，支持 4 种风格
- **5 页 UI**：圆形屏 466x466 自适应，垂直滑动交互

## 目录结构

```
emotionsense/
├── src/                    # 快应用源码（AIoT-IDE 工程）
│   ├── manifest.json
│   ├── app.ux
│   ├── pages/Index/index.ux    # 主页面
│   ├── common/
│   │   ├── scripts/         # JS 工具模块
│   │   ├── components/      # 自定义组件
│   │   └── assets/          # 图标资源
│   └── i18n/zh-CN.json
├── skills/                 # 自定义 AI Skill（部署到 /data/ai_agent/skills/）
│   ├── emotion-interview.md       # 主 Skill：情绪访谈记录器
│   ├── emotion-interview-styles.md       # 访谈风格定义
│   ├── emotion-interview-dialogue.md     # 对话策略
│   ├── emotion-interview-rs-engine.md    # RS 共鸣分引擎
│   ├── emotion-interview-wrap-safety.md  # 收尾与安全兜底
│   ├── solo-podcast.md          # 播客生成器
│   ├── meme-nickname.md         # 名场称号生成器
│   └── chinese-inversion.md     # 中文倒装句式
├── scripts/                # 部署与演示脚本
│   ├── start_vela.sh           # 一键启动模拟器+部署+AI Agent
│   ├── gen_podcast.sh          # 命令行生成播客
│   └── demo_chat_podcast.sh    # 三轮对话+播客一键演示
├── build/                  # 构建产物
│   └── com.disco.emotionsense.debug.1.0.0.rpk
└── docs/                   # 文档
    └── EmotionSense_Technical_Report.docx
```

## 快速开始

### 环境要求

- AIoT-IDE（快应用开发工具）
- openvela goldfish 模拟器（QEMU aarch64）
- 小米 MiMo Token Plan Key（tp- 开头）

### 本地开发（AIoT-IDE）

1. 用 AIoT-IDE 打开 `src/` 目录
2. 连接模拟器或设备
3. 点击运行

### 模拟器部署

```bash
# 一键启动 QEMU + 部署快应用 + 启动 AI Agent
bash scripts/start_vela.sh --skip-fonts

# 进入 NSH 控制台
screen -r vela

# 测试 AI 对话（英文）
ask hello

# 中文对话演示
bash scripts/demo_chat_podcast.sh warm
```

### Skill 部署

将 `skills/` 目录下所有 `.md` 文件复制到模拟器的 `/data/ai_agent/skills/` 目录。

> 注意：skill loader 只读取顶层 `.md` 文件，子目录不会被自动加载。主 Skill 通过 full path 引用子 Skill 文件。

## 技术栈

| 层级 | 技术 |
|------|------|
| 操作系统 | openvela (NuttX) |
| 应用框架 | 快应用 (QuickJS + Yoga + LVGL) |
| AI Agent | ai_agent + velaclaw |
| LLM | 小米 MiMo (mimo-v2.5) |
| 算法 | ES3 情绪融合、RS 共鸣分 |
| 存储 | @system.storage |

## License

Apache 2.0
