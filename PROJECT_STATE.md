# 项目目标

为应蓉芬制作一个单页 AIGC 视觉设计师作品集网站，用于展示个人定位、能力模块、精选作品、案例详情和联系方式。整体视觉方向是克制、干净、有品牌感，主色保持浅纸感背景、灰绿文字、细线网格、低饱和动态视觉。

# 当前完成情况

- 项目是 React + Vite + Tailwind 单页网站，当前主要入口是 `src/App.jsx`。
- 已完成导航、首屏、关于我、精选作品、服务/简历入口、能力模块、联系区和页脚。
- 首屏保留原 AI Portfolio 结构，集成了 React Bits 风格的 `Prism` WebGL 动态背景，已降低饱和度、透明度和对比度，使其接近网站现有色调。
- 首屏英文标语为一行展示：`Every project tells a story. Every detail has a purpose. Every interaction matters.`
- “关于我”板块已增强排版，不再只有大面积空白；左侧为个人姓名、三行英文短句和标签，右侧为能力叙述与三条编号要点。
- “关于我”底部统计数据已按反馈删除。
- “作品”板块有 4 个案例：产品主图视觉、A+ 详情页视觉系统、AI 视频与动态视觉、品牌传播物料。
- 4 个作品首图已改为线稿风格 SVG，去掉影响阅读性的覆盖文字标签。
- 点击作品卡片可打开案例详情弹层；点击详情图片/视频可打开大图灯箱，支持缩略图、上一张/下一张、关闭。
- “能力模块”已改为横向可滑动模块，卡片 hover 时有深色品牌感交互动效。
- “服务/关于我”与“能力模块”的页面顺序已按反馈调整。
- 联系区保留 CTA 按钮，删除了邮箱和地区胶囊标签。
- 已补充 `.gitignore`，排除 `node_modules/`、`dist/`、`tmp/`、`tmp_pdf/`、日志和环境变量文件。
- 已修正导航中“关于我”的锚点，改为跳转到作品下面的 `#services` 关于我正文区。
- 已优化作品案例详情弹层与灯箱的小屏布局：弹层外层允许滚动、手机端内边距和标题尺寸收紧、灯箱左右切换按钮改为稳定绝对定位。
- 已补充基础 SEO / 分享信息：`theme-color`、Open Graph 标题/描述/图片，以及 SVG favicon。
- 已按反馈调浅文字卡片 hover/点击交互：关于我高亮项和能力模块不再使用深色底白字，改为浅灰绿底、深色文字，避免影响阅读。
- 已按批注删除关于我左侧卡片底部 `Profile / 01` 装饰，并让关于我两侧卡片在桌面端等高齐平。
- 已优化联系区：说明文字缩小并收窄，避免压住右侧背景，同时增加品牌化标签和左侧细线信息层。
- 已按反馈降低全站灰雾感：提亮纸白背景、减淡全局网格与阴影、降低首屏 WebGL 与装饰块透明度，整体从脏灰调回干净浅纸感。
- 已增强导航品牌感和交互：品牌标记更完整，导航改为胶囊分段样式，支持滚动进度条与当前区段高亮。
- 已按页面内容顺序调整导航：`关于我` 放到 `能力` 前面，并验证点击 `作品` 后不会误高亮到 `关于我`；后续已把 `关于我` 链接改为跳转到作品下方正文区。
- 已重构关于我左侧品牌卡：从单一圆圈装饰改为网格底纹、组合圆形、品牌角标、大号 AI 水印和底部系统信息。
- 已在当前工作区 `/Users/jintanfuren/Documents/jianli-1` 完成生产构建验证。

# 修改过哪些文件

核心代码：

- `src/App.jsx`
- `src/main.jsx`
- `src/styles.css`
- `src/data/portfolio.js`

组件：

- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Works.jsx`
- `src/components/Skills.jsx`
- `src/components/Services.jsx`
- `src/components/Contact.jsx`
- `src/components/SectionHeader.jsx`
- `src/components/Prism.jsx`
- `src/components/Prism.css`

静态资源：

- `public/portfolio/profile-photo.png`
- `public/portfolio/reference-motion.mp4`
- `public/portfolio/ai-sofa-workflow.png`
- `public/portfolio/sofa-main.jpg`
- `public/portfolio/dresser-aplus.jpg`
- `public/portfolio/gaming-chair-aplus.png`
- `public/portfolio/workbench-aplus.png`
- `public/portfolio/dresser-main/main-01.jpg` 至 `main-08.jpg`
- `public/portfolio/dresser-main/detail-01.jpg` 至 `detail-09.jpg`
- `public/portfolio/covers/product-main-visual.svg`
- `public/portfolio/covers/aplus-visual-system.svg`
- `public/portfolio/covers/ai-video-motion.svg`
- `public/portfolio/covers/brand-campaign.svg`
- `public/favicon.svg`

项目配置：

- `.gitignore`
- `package.json`
- `package-lock.json`

# 为什么这样设计

- 使用单页结构，避免复杂路由，后续修改文案、图片和案例内容更快。
- 作品、联系方式、技能等内容集中放在 `src/data/portfolio.js`，便于继续替换真实资料。
- 作品首图使用 SVG 线稿而不是 AI 生成图片，主要是为了保证中文标题和英文辅助文字的可控性、清晰度和阅读性。
- 案例详情使用弹层和灯箱，不跳转新页面，适合当前作品集规模，也方便快速浏览。
- `Prism` 只作为首屏低调动态背景，不承担信息展示，避免抢走作品集主体内容。
- 能力模块改为横向滑动，是为了满足“一行展示 + 可滑动 + hover 有品牌感”的反馈。
- 整体继续沿用浅色纸感、细线、网格、低饱和色调，避免和当前网站视觉系统割裂。

# 当前存在的问题

- 当前 git 状态仍有大量未跟踪项目文件，因为当前仓库此前没有纳入这些源码；但 `.gitignore` 已生效，`node_modules/` 和 `dist/` 已显示为 ignored。
- 安装 `ogl` 后，`npm` 曾提示存在 2 个安全漏洞；本轮尝试 `npm audit --audit-level=moderate`，沙箱内因无法解析 npm registry 失败，联网审计请求又被权限审查拒绝，因为会向外部 npm registry 发送依赖元数据。后续需要用户明确授权后再评估。
- 还没有自动化测试。
- 移动端还需要完整真机/真实视口视觉 QA。浏览器工具本轮的 viewport override 没有实际改变页面尺寸，无法作为可靠移动截图依据；已从源码和桌面交互层面修复弹层/灯箱的小屏风险。
- 案例详情文案仍偏模板化，需要替换成真实项目背景、职责、工具、产出和结果。
- 当前 `CONTENT.md` / `SESSION.md` 不会自动同步到网站，网站实际读取的是 `src/data/portfolio.js`。
- `Prism` 使用 WebGL，低性能设备上需要继续观察首屏性能。
- 浏览器里如果出现 `127.0.0.1 拒绝连接`，通常是 Vite dev server 已停止，需要重新启动。

# TODO

- 确认哪些文件应该纳入版本控制并提交；`.gitignore` 已补充，`node_modules/`、`dist/`、临时目录已排除。
- 替换 4 个作品案例的真实项目文案与图片/视频素材。
- 对移动端做完整适配检查：首屏、作品网格、案例详情、灯箱、能力横滑。
- 给作品详情增加更明确的项目结构，例如背景、目标、职责、流程、结果。
- 根据最终投递场景继续完善 SEO 信息；基础页面标题、favicon 和 Open Graph 信息已补充。
- 部署前运行生产构建并检查构建产物。
- 用户明确授权联网发送依赖元数据后，再评估 `npm audit` 结果，判断是否需要升级依赖。

# 如何运行

项目目录：

```bash
cd /Users/jintanfuren/Documents/jianli-1
```

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev -- --host 127.0.0.1
```

浏览器访问：

```text
http://127.0.0.1:5173/
```

如果 5173 已被占用，Vite 会自动换到下一个端口。本轮开发服务实际启动在：

```text
http://127.0.0.1:5174/
```

生产构建：

```bash
npm run build
```

预览构建产物：

```bash
npm run preview
```

# 如何测试

目前没有自动化测试，主要用构建和浏览器检查：

```bash
npm run build
```

手动检查重点：

- 页面能正常打开，控制台无明显运行错误。
- 首屏 `Prism` 动效存在，但不影响文字阅读。
- “关于我”板块统计数据已删除。
- 4 个作品首图都能加载，文字清晰，无多余覆盖标签。
- 点击每个作品卡片能打开案例详情。
- 案例详情中的图片/视频能打开灯箱，上一张、下一张、关闭可用。
- 能力模块在一行内横向滑动，hover 有深色品牌交互动效。
- 桌面和移动端无明显文字重叠、横向溢出或按钮不可点问题。

# 本轮验证结果

- `npm install` 成功。
- `npm run build` 成功，构建产物生成到 `dist/`。
- 浏览器桌面检查通过：页面标题正常、首屏 H1 正常、4 个作品卡片存在、“关于我”导航锚点为 `#about`、无横向溢出、控制台无错误。
- 导航交互检查通过：顶部默认高亮“概况”，滚动到关于我后高亮切换为“关于我”，进入 `#works` 时高亮“作品”，点击“作品”后高亮会锁定在“作品”并避免滚动途中闪到“关于我”，滚动进度条随页面滚动变化。
- 作品详情交互检查通过：点击作品卡片可打开案例详情，点击图片可打开灯箱，灯箱上一张/下一张/关闭按钮存在，灯箱和案例详情都可关闭。
- 首屏 `Prism` WebGL canvas 存在且尺寸正常，截图可见动态背景区域，控制台无 WebGL 相关错误。
- `.gitignore` 生效：`node_modules/` 和 `dist/` 当前为 ignored。
