# AI Coding 过程说明文档

> EmotionSense（情绪传感）· 2026 首届 openvela AI 硬件开发者大赛

## 一、AI 工具使用概览

| 阶段 | AI 工具 | 用途 |
|------|---------|------|
| 初期开发 | ChatGPT / Claude 等 LLM | 快应用框架搭建、初版 UI 布局、基础 JS 逻辑 |
| 中期开发 | TRAE AI Coding IDE | ES3 算法、Skill 编写、部署脚本、调试排错 |
| 运行时 | 小米 MiMo (mimo-v2.5) | 端侧 AI Agent 的 LLM 推理引擎 |
| 测试调试 | TRAE AI Coding IDE | SSH 连接 VM、NSH 终端交互、screen 会话管理、错误排查 |

> 说明：初期开发阶段的 AI 对话记录已不可追溯，以下过程说明基于项目实际产出物和后期 TRAE 会话记录整理。

## 二、AI Coding 代码占比

| 模块 | AI 参与度 | 说明 |
|------|-----------|------|
| UI 布局 (index.ux) | ~90% | 页面结构、CSS 样式、5 页垂直滑动交互均由 AI 辅助生成 |
| 业务逻辑 (index.js) | ~85% | ES3 计算、健康数据订阅、velaclaw 调用、storage 持久化、震动提醒 |
| 工具模块 | ~80% | emotion.js、health.js、velaclaw.js、store.js |
| AI Skill 文件 | ~95% | 8 个 .md 文件（主 Skill + 子 Skill），AI 辅助编写并优化至 8192B 限制内 |
| 部署脚本 | ~90% | start_vela.sh、gen_podcast.sh、demo_chat_podcast.sh |
| 技术报告 | ~70% | gen_report.js 脚本生成 docx，AI 辅助撰写内容 |
| 组件/资源 | ~60% | EmotionBadge.ux、HealthReadout.ux、TrendChart.ux |
| **整体占比** | **~85%** | |

## 三、各模块 AI 编码过程

### 3.1 快应用 UI (index.ux)

**AI 工具**：ChatGPT（初版）+ TRAE（迭代优化）

**过程**：
1. 初版 5 页结构由 ChatGPT 生成基本框架：主页（时钟 + 三卡片）、AI 对话、历史记录、播客、趋势图
2. TRAE 迭代优化：
   - 圆形屏 466x466 自适应布局调整
   - ES3 波动条颜色渐变（平静蓝 → 微波澜绿 → 明显波动橙 → 峰值红）
   - 对话页消息气泡（AI 左灰、用户右黄）
   - 趋势图条形图渲染（从动态 style 绑定改为固定 class，解决 AIoT-IDE 不显示问题）
   - 导航按钮上下箭头分页逻辑

### 3.2 ES3 情绪融合算法 (emotion.js)

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. AI 辅助设计三路生理信号加权融合公式：
   - Stress 归一化：nStress = clamp(stress / 49, 0, 1)
   - delta HR 归一化：nHr = clamp(|HR - 70| / 60, 0, 1)
   - delta SpO2 归一化：nSpo2 = clamp((100 - SpO2) / 10, 0, 1)
   - 加权：ES3 = round((0.5 × nStress + 0.3 × nHr + 0.2 × nSpo2) × 100)
2. 情绪分级逻辑：< 30 平静；30-49 微波澜；50-69 明显波动；≥ 70 峰值
3. 颜色和标签映射函数

### 3.3 健康数据封装 (health.js)

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. AI 辅助封装 @service.health 的 subscribeSample 和 getRecentSamples 接口
2. 加入冷启动补帧和平滑滤波逻辑
3. FALLBACK 降级数据：模拟器无真实传感器时返回默认值（HR=73, SpO2=97, STRESS=37）
4. 处理订阅返回码 code 202（不可用）的降级逻辑

### 3.4 velaclaw 调用封装 (velaclaw.js)

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. AI 辅助将 @system.velaclaw 的 ask() 回调封装为 Promise 接口
2. 错误码分级处理：203（设备不支持 AI）、1000（服务不可用）、1001（超时）
3. 对接 ai_agent，确保中文消息通过快应用管道发送（绕过 NSH 终端 UTF-8 编码问题）

### 3.5 存储模块 (store.js)

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. AI 辅助封装 @system.storage 的 get/set/delete 接口为 Promise
2. 对话历史持久化（按日期存储摘要）
3. 趋势图数据持久化（7 天历史数据动态加载，首次启动生成模拟基线）

### 3.6 AI Skill 文件（8 个）

**AI 工具**：TRAE AI Coding IDE

**这是 AI 参与度最高的模块（~95%），核心过程如下：**

1. 初版 emotion-interview.md 单文件 19KB → 加载后触发 arm64_fatal.c:571 崩溃
2. AI 辅助分析崩溃原因：ai_agent 上下文缓冲区 8192 字节限制
3. 拆分为 flat 主从+参考文件架构：
   - emotion-interview.md（主 Skill，5970 字节，在 8192 限制内）
   - emotion-interview-styles.md（访谈风格：温暖/深度/活力/故事）
   - emotion-interview-dialogue.md（对话策略与话术模板）
   - emotion-interview-rs-engine.md（RS 共鸣分计算引擎）
   - emotion-interview-wrap-safety.md（收尾策略与安全兜底）
4. 主 Skill 通过 full path (/data/ai_agent/skills/xxx.md) 引用子 Skill
5. ai_agent 运行时通过 read_file 工具按需加载子 Skill
6. 另外编写 3 个独立 Skill：
   - solo-podcast.md（播客生成器，四风格）
   - meme-nickname.md（名场称号生成器）
   - chinese-inversion.md（中文倒装句式，频率锁低）

### 3.7 部署与演示脚本

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. start_vela.sh：一键启动 QEMU 模拟器 + 部署快应用 + 启动 AI Agent
2. gen_podcast.sh：命令行生成播客（初版用 curl -d 传 JSON 换行符破坏格式 → AI 辅助改用 Python json.dumps 修复）
3. demo_chat_podcast.sh：三轮中文对话 + 播客一键演示（AI 辅助处理 SSH 终端中文显示）

### 3.8 震动提醒功能

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. AI 辅助查阅 openvela 快应用文档，找到 @system.vibrator 模块
2. 实现 checkVibrate() 方法：ES3 从 < 30 跳到 ≥ 70 时触发 'short' 震动
3. 加入 5 分钟冷却机制避免频繁震动

### 3.9 趋势图动态数据

**AI 工具**：TRAE AI Coding IDE

**过程**：
1. 初版 chartData 为静态 mock 数据
2. AI 辅助改造为从 @system.storage 动态加载
3. 新增 initHistoryData()、saveHealthData()、loadChartData() 方法
4. 首次启动检测 storage 为空时生成 7 天模拟基线
5. 新数据实时追加到 storage，趋势图随时间变化
6. 排查 AIoT-IDE 中柱状图不显示问题：动态 style 绑定不支持 → 改为固定 class 样式

## 四、关键问题与 AI 辅助排查

| 问题 | AI 辅助排查过程 |
|------|-----------------|
| Skill 文件 19KB 导致崩溃 | 分析 arm64_fatal 日志，定位 8192B 缓冲区限制，拆分为 flat 结构 |
| LLM 返回空回复 | 测试不同 max_tokens，发现推理 token 占满输出预算，调至 500 |
| NSH 终端中文乱码 | 分析 NuttX NSH 行编辑器不支持 UTF-8，改用 velaclaw.ask() 管道 |
| ask 命令只能回答一次 | 定位快应用自动对话占用 AI Agent，关闭自动对话序列 |
| 播客生成无内容 | curl -d 传 JSON 换行符破坏格式，改用 Python json.dumps |
| AIoT-IDE 柱状图不显示 | 排查动态 style 绑定不支持，改为固定 class + 静态数据初始化 |
| 快应用 JS 缓存残留 | 识别缓存问题，需完整重启模拟器清除 |

## 五、AI 辅助产出物清单

| 产出物 | 文件 | AI 参与度 |
|--------|------|-----------|
| 快应用主页面 | src/pages/Index/index.ux | ~90% |
| 快应用业务逻辑 | src/pages/Index/index.js | ~85% |
| ES3 算法 | src/common/scripts/emotion.js | ~80% |
| 健康数据封装 | src/common/scripts/health.js | ~80% |
| velaclaw 封装 | src/common/scripts/velaclaw.js | ~85% |
| 存储封装 | src/common/scripts/store.js | ~80% |
| 应用入口 | src/app.ux | ~70% |
| 包配置 | src/manifest.json | ~60% |
| 自定义组件 | src/common/components/*.ux | ~60% |
| 主题样式 | src/common/style/theme.css | ~70% |
| AI Skill × 8 | skills/*.md | ~95% |
| 部署脚本 × 3 | scripts/*.sh | ~90% |
| 技术报告生成脚本 | gen_report.js | ~70% |
| README | README.md | ~80% |

## 六、Token 使用量估算

| 用途 | 估算 Token 量 |
|------|--------------|
| 代码生成（UI/JS/组件） | ~20K |
| Skill 文件编写与调试 | ~15K |
| 部署脚本编写 | ~5K |
| 错误排查与调试 | ~10K |
| 对话测试与播客生成 | ~5K |
| 技术报告撰写 | ~5K |
| **合计** | **~60K tokens** |

## 七、AI 工具对开发效率的提升

- **代码编写效率**：85% 代码由 AI 辅助生成，从设计到可运行代码的时间大幅缩短
- **文档查阅效率**：AI 辅助查阅 openvela 快应用文档（@service.health、@system.velaclaw、@system.vibrator、@system.storage），快速定位可用接口
- **错误排查效率**：SSH 日志分析、崩溃定位、编码问题诊断均由 AI 辅助完成
- **Skill 架构设计**：AI 辅助设计主从+参考文件架构，解决 8192 字节缓冲区限制

---

> 本文档基于项目实际开发过程整理。初期开发阶段的 AI 对话记录已不可追溯，中后期 TRAE AI Coding IDE 会话记录可作为佐证。技术报告 3.6 节"AI-Native 开发说明"中的数据与本文档一致。
