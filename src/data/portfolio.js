import { aplusLongImages } from './aplusLongImages.js';
import { brandImages } from './brandImages.js';
import { motionMedia } from './motionMedia.js';
import { productMainImages } from './productMainImages.js';

export const navItems = [
  { label: '概况', href: '#top' },
  { label: '作品', href: '#works' },
  { label: '关于我', href: '#services' },
  { label: '能力', href: '#skills' },
  { label: '联系', href: '#contact' },
];

export const profile = {
  name: '应蓉芬',
  brand: 'AI Portfolio',
  role: 'AIGC 设计师 / AI 视觉设计师',
  email: 'kuaikuai74@outlook.com',
  phone: '15058475217',
  location: '杭州萧山',
  summary:
    '拥有6年视觉设计深耕经验，2年跨境电商视觉团队管理经验，兼具实操能力与统筹管理思维，擅长将AIGC工具、商业视觉判断与团队工作流结合，快速把创意转化为可落地的图像、视频与数字内容。带领团队输出符合品牌调性的视觉作品，又能站在业务视角判断设计的实际价值，同时通过流程和规范确保方案高效落地，这也是我理解的视觉管理岗位需要的核心能力。',
};

export const hero = {
  eyebrow: 'AIGC VISUAL DESIGN',
  title: 'AI PORTFOLIO',
  tagline: 'Every project tells a story. Every detail has a purpose. Every interaction matters.',
  description:
    '每一个项目都有故事。每一个细节都有意义。每一次交互都值得被认真设计。',
  primaryCta: '查看作品',
  secondaryCta: '联系合作',
};

export const stats = [
  { value: '6+', label: '年视觉设计经验' },
  { value: '13', label: '人视觉团队管理' },
  { value: '35%', label: '交付效率提升' },
  { value: '20+', label: '视觉项目' },
];

export const about = {
  eyebrow: 'About Me',
  title: '应蓉芬',
  description: 'Think Clearly.\nDesign Simply.\nBuild Meaningfully.',
  body:
    '精通 PS、AI 设计软件，熟练运用 AIGC 提效赋能，运用 API 节点调用各大国内外模型（Nano Banana 2 / Image 2.0 / Veo 3.1 / Seedance 2.0 / Kling 3.0）进行逻辑与长文本梳理以及生图。',
  highlights: [
    '深谙欧美审美及海外本土化视觉逻辑',
    '擅长融合视觉美学与营销诉求，兼顾品牌调性与业务转化',
    '善用 AI 优化工作流程，提升团队整体创作效率与产出质量',
  ],
};

export const works = [
  {
    title: '产品主图视觉',
    tag: 'AI Image / E-commerce',
    description:
      '为家具、家居、生活方式类产品生成主图视觉与场景图，强调产品卖点、质感表达与平台转化。',
    cover: {
      src: '/portfolio/covers/product-main-visual.svg',
      alt: '产品主图视觉海报封面',
    },
    caseStudy: {
      eyebrow: 'Brand Identity',
      title: '产品主图视觉',
      summary:
        '围绕家具与家居生活方式产品，搭建户外场景、材质氛围和使用情境，让产品主图兼具真实感、卖点表达和平台转化效率。',
      meta: [
        { label: '职责', value: '视觉策略 / AI 生图 / 后期合成' },
        { label: '流程', value: '卖点拆解 / 场景生成 / 系列延展' },
        { label: '产出', value: '电商主图 / 场景图 / 团队规范' },
      ],
      structure: [
        { label: '项目背景', value: '面向跨境电商家具与家居品类，产品需要在主图阶段快速传达尺寸、材质、使用场景和生活方式氛围。' },
        { label: '项目目标', value: '在控制制作成本的前提下，提高主图真实感和卖点识别度，让用户更快理解产品适配场景。' },
        { label: '设计职责', value: '负责卖点拆解、场景方向设定、AI 生图控制、后期合成修正和系列化视觉标准整理。' },
        { label: '工具流程', value: '结合 PS、AI 生图模型与后期精修流程，先确认产品结构和光影关系，再批量延展不同场景。' },
        { label: '产出结果', value: '形成可复用的电商主图与场景图方案，为同类 SKU 延展和团队协作提供稳定参考。' },
      ],
      details: [
        '通过 AI 生图与后期合成，快速生成不同空间、光线和人群使用场景，减少传统拍摄前期成本。',
        '将产品尺寸、材质、功能与生活方式叙事结合，提升用户对场景适配度和购买理由的感知。',
        '输出可复用的主图视觉规范，方便后续系列产品延展和团队协作。',
      ],
      images: productMainImages,
    },
  },
  {
    title: 'A+ 详情页视觉系统',
    tag: 'A+ Page / Layout',
    description:
      '围绕产品核心卖点设计模块化详情页，让品牌调性、功能说明和购买理由更清晰。',
    cover: {
      src: '/portfolio/covers/aplus-visual-system.svg',
      alt: 'A+ 详情页视觉系统海报封面',
    },
    caseStudy: {
      eyebrow: 'A+ Content',
      title: 'A+ 详情页视觉系统',
      summary:
        '将产品卖点拆解为可阅读、可复用的详情页模块，用场景图、功能说明和材质细节建立清晰的购买理由。',
      meta: [
        { label: '职责', value: '信息层级 / 页面视觉 / 规范沉淀' },
        { label: '流程', value: '卖点梳理 / 模块排版 / 视觉复用' },
        { label: '产出', value: 'A+ 长图 / 模块模板 / SKU 延展' },
      ],
      structure: [
        { label: '项目背景', value: 'A+ 页面需要承接用户从主图进入后的深度浏览，补足功能、材质、尺寸和使用细节。' },
        { label: '项目目标', value: '把复杂卖点拆成可快速阅读的视觉模块，降低理解成本，并保持不同 SKU 的页面一致性。' },
        { label: '设计职责', value: '负责信息层级梳理、模块节奏设计、视觉风格统一、场景图补充和页面规范沉淀。' },
        { label: '工具流程', value: '使用 PS 完成长图排版与精修，结合 AI 图像生成补足场景素材，并按模块结构复用。' },
        { label: '产出结果', value: '输出 A+ 长图、功能说明模块和可延展模板，支持同类产品快速上线。' },
      ],
      details: [
        '围绕用户浏览路径组织信息层级，先呈现场景价值，再补充功能、尺寸、材质与使用细节。',
        '通过统一的版式节奏、色彩和图文规范，让不同 SKU 能快速延展成系列化页面。',
        '结合 AI 图像生成与后期修图，提高场景图补充和页面视觉迭代效率。',
      ],
      images: aplusLongImages,
    },
  },
  {
    title: 'AI 视频与动态视觉',
    tag: 'AI Video / Motion',
    description:
      '使用 AI 视频与剪辑工具制作动态展示、产品氛围短片、社媒内容和视觉分镜。',
    cover: {
      src: '/portfolio/covers/ai-video-motion.svg',
      alt: 'AI 视频与动态视觉海报封面',
    },
    caseStudy: {
      eyebrow: 'AI Motion',
      title: 'AI 视频与动态视觉',
      summary:
        '从静态产品图出发，规划分镜、运动节奏和场景氛围，用 AI 视频工具快速验证动态内容方向。',
      meta: [
        { label: '职责', value: '分镜规划 / 图生视频 / 剪辑调色' },
        { label: '流程', value: '静帧准备 / 运动测试 / 节奏优化' },
        { label: '产出', value: '动态短片 / 分镜图 / 工作流规则' },
      ],
      structure: [
        { label: '项目背景', value: '社媒和站内内容需要比静态图更快呈现氛围、细节和使用状态，适合用 AI 视频快速验证方向。' },
        { label: '项目目标', value: '从已有产品图延展出短视频表达，让画面运动服务产品卖点，而不是只做装饰性动态。' },
        { label: '设计职责', value: '负责分镜设定、关键静帧准备、图生视频测试、剪辑节奏调整和成片筛选。' },
        { label: '工具流程', value: '以产品静帧和参考图为基础，调用 AI 视频模型生成动态片段，再通过剪辑、调色和节奏控制统一输出。' },
        { label: '产出结果', value: '沉淀动态图、短片和镜头规则，帮助团队复用到后续产品视频内容。' },
      ],
      details: [
        '根据产品卖点拆分镜头语言，明确开场、细节、使用场景和收束画面。',
        '结合图生视频、剪辑和调色流程，将静态视觉延展为适合社媒传播的动态内容。',
        '沉淀提示词、参考图和镜头规则，方便团队复用同类产品的视频生产流程。',
      ],
      images: motionMedia,
    },
  },
  {
    title: '品牌传播物料',
    tag: 'Brand / Campaign',
    description:
      '完成品牌活动视觉和社媒图文，保持统一且可延展的品牌表达。',
    cover: {
      src: '/portfolio/covers/brand-campaign.svg',
      alt: '品牌传播物料海报封面',
    },
    caseStudy: {
      eyebrow: 'Brand Campaign',
      title: '品牌传播物料',
      summary:
        '围绕品牌调性和传播场景，延展电商主图、社媒图文与活动视觉，让不同渠道保持统一表达。',
      meta: [
        { label: '职责', value: '品牌延展 / 传播视觉 / 物料统筹' },
        { label: '流程', value: '调性确认 / 资产组合 / 渠道适配' },
        { label: '产出', value: '活动图 / 社媒图文 / 投放素材' },
      ],
      structure: [
        { label: '项目背景', value: '品牌传播物料需要在站内、社媒和投放渠道中保持统一识别，同时适配不同尺寸和内容节奏。' },
        { label: '项目目标', value: '让品牌调性、产品利益点和活动信息在多渠道中稳定表达，减少重复沟通和临时改版成本。' },
        { label: '设计职责', value: '负责品牌调性判断、视觉资产组合、版式延展、渠道尺寸适配和物料输出统筹。' },
        { label: '工具流程', value: '基于已有产品图、场景图和文案信息建立视觉框架，再用 PS 与 AI 辅助素材完成批量延展。' },
        { label: '产出结果', value: '输出活动视觉、社媒图文和投放素材，并形成可复用的品牌视觉延展规则。' },
      ],
      details: [
        '根据品牌定位控制画面气质、构图和色彩，让物料既能承接商业转化，也能服务长期品牌认知。',
        '把产品图、场景图和短文案组合成适合站内外投放的视觉资产。',
        '建立可延展的视觉规则，减少重复沟通成本，并提高团队批量产出的一致性。',
      ],
      displayMode: 'long-preview',
      images: brandImages,
    },
  },
];

export const skills = [
  {
    title: 'AI 图像生成',
    description:
      '熟悉 AIGC 生图流程，可结合提示词、参考图、模型调用和后期修图完成商业级视觉。',
  },
  {
    title: '团队与管理',
    description:
      '根据项目体量布局岗位人员并按月度制定需求计划表并实施。',
  },
  {
    title: 'AI 视频工作流',
    description:
      '掌握 AI 视频创作流程，能够将静态图像、产品卖点和分镜脚本转为动态内容。',
  },
  {
    title: '商业视觉设计',
    description:
      '熟悉跨境电商、海外审美、产品主图、A+ 页面、海报和品牌传播物料的设计逻辑。',
  },
  {
    title: '团队与流程管理',
    description:
      '具备设计团队管理、需求评审、SOP 搭建、内训分享、绩效考核和跨部门协同经验。',
  },
  {
    title: '内训与分享',
    description:
      '开展部门会议，回顾阶段性情况与技术性技能探讨与应用。涵盖“AI 新常识及其背后的超能力”、“业务场景下可视化模型实操培训”、“AI 视频高效创作流程培训”、“PS 图层快捷导出脚本”等专项提效业务培训。',
  },
];

export const services = [
  '个人简历',
  '技术能力',
  '工作经历',
  '教育经历',
];

export const resumeProfile = {
  title: '个人简历',
  subtitle: 'AI VISUAL DESIGNER / CROSS-BORDER E-COMMERCE',
  sections: [
    {
      label: '视觉设计与团队管理',
      body:
        '6 年视觉设计深耕经验，2年跨境电商视觉团队管理经验，兼具实操能力与统筹管理思维精通 PS、Al 设计软件，熟练运用 AIGC 提效赋能，运用API节点调用各大国内外模型 (Nano Banana 2/ Image 2.0/Veo 3.1/Seedance 2.0Kling3.0）进行逻辑与长文本梳理以及生图，深谙欧美审美及海外本土化视觉逻辑',
    },
    {
      label: '商业审美与转化落地',
      body:
        '具备扎实美术功底与商业审美，擅长融合视觉美学与营销诉求，兼顾品牌调性与业务转化拥有策略思维与强落地能力，善用 Al 优化工作流程，提升团队整体创作效率与产出质量',
    },
    {
      label: '设计业务与管理核心',
      body:
        '懂设计＋懂业务 ＋能落地〝——带领团队输出符合品牌调性的视觉作品，又能站在业务视角判断设计的实际价值，同时通过流程和规范确保方案高效落地，这也是我理解的视觉管理岗位需要的核心能力。',
    },
  ],
};

export const serviceProfiles = {
  个人简历: resumeProfile,
  技术能力: {
    title: '技术能力',
    subtitle: 'VISUAL STRATEGY / AIGC WORKFLOW / TEAM OPS',
    sections: [
      {
        label: '网页与品牌',
        body:
          '根据不同品牌与类目制定视觉策略，分配执行并跟踪点击率；熟悉跨境电商、欧美审美、产品主图、A+ 页面、海报和品牌传播物料的设计逻辑。',
      },
      {
        label: '团队与管理',
        body:
          '根据项目体量布局岗位人员，按月度制定需求计划表并实施；统筹平面、3D、视频三大业务小组的日常运转与业务排布。',
      },
      {
        label: '绩效与培训',
        body:
          '制定部门人员绩效考核内容与维度并定期回顾，开展部门会议和技术分享，涵盖 AI 新常识、可视化模型实操、AI 视频高效创作流程、PS 图层快捷导出脚本等专项提效培训。',
      },
      {
        label: '流程与配合',
        body:
          '审核评估需求，跟进产品样品寄样与项目内容按时保质交付；搭建需求评审、任务排期、设计执行、成果验收一体化 SOP 流程。',
      },
      {
        label: '品牌与延展',
        body:
          '孵化主要品牌并策划品牌延展走势，统一线上与线下视觉规范，同步统筹搭建标准化设计素材资源库。',
      },
    ],
  },
  工作经历: {
    title: '工作经历',
    subtitle: 'EXPERIENCE / MANAGEMENT / DELIVERY',
    sections: [
      {
        label: '宁波美鹰家居集团有限公司（2024/6-至今）｜设计负责人',
        body:
          '团队管理\n统筹 13 人视觉部门全面管理工作，下辖平面、3D、视频三大业务小组，统筹团队日常运转与业务排布。\n1. 搭建了“1+1 带教体系”——每位新人配 1 名资深设计师，从设计思维、工具技巧到业务理解分阶段带教，累计带教新员工 7 名，新人 1 个月时间能独立承接品类组需求，团队整体产出效率提升 25%。\n2. 协助运营团队进行沟通和协调，负责视觉审核，确保团队输出的视觉内容与战略一致。\n3. 持续深耕行业前沿视觉趋势与创新技术，常态化组织月度专业培训与交流学习，提升团队的专业技术水平和效率。\n\n跨部门协同与项目管理\n1. 梳理打通设计与运营全流程链路，搭建需求评审、任务排期、设计执行、成果验收一体化标准化 SOP 流程，大幅精简对接成本，部门整体需求交付效率提升 35%。\n2. 牵头落地视觉优化专项升级项目，聚焦爆款产品与核心页面开展全维度视觉迭代，依托 A/B 测试数据量化优化成果，充分调动团队创作积极性，强化设计人员专业价值感与工作主动性。\n3. 制定人员绩效考核制定并实施团队绩效激励政策，维护积极的团队氛围，提升整体工作效率。\n\n视觉体系制作并搭建\n1. 负责公司家具品牌在亚马逊及其他跨境平台的视觉设计和页面优化，协同 3D 渲染完成视觉成品输出；业务覆盖桌椅、梳妆台、沙发、蹦床、户外庭院露营家具等全品类。\n2. 在品牌风格基础上把控负责品类的整体形象设计与更新，同步统筹搭建标准化设计素材资源库。',
      },
      {
        label: '杭州声影文化创意有限公司（2023/10-2024/3）｜视觉设计',
        body:
          '1. 精准拆解并吃透运营核心需求，多方调研整合优质设计素材与视觉参考，自主输出创意设计思路，独立主导完成 20 余个直播间全案视觉项目，统筹配套视觉内容全量落地。\n2. 统筹品牌日常视觉宣传物料设计，涵盖达人宣传海报、商务 PPT、节日主题海报等各类物料，全面满足日常品牌推广与品牌氛围营造需求。',
      },
      {
        label: '杭州火尼文化传播有限公司（2022/9-2023/9）｜空间视觉设计',
        body:
          '1. 紧扣策划主题创作直播间场景效果图，结合运营实际场景统筹设计思路，兼顾场景实用优势与视觉呈现效果，优化整体直播视觉氛围。\n2. 独立完成活动营销海报、私域社群宣传图文、直播间主题贴片等各类营销视觉内容设计，适配多渠道传播使用需求。\n3. 积极参与品牌平面创意策划，承接小程序 UI 界面设计，统筹视觉执行与落地。',
      },
      {
        label: '浙江水文新技术开发经营公司（2019/7-2022/7）｜平面设计',
        body:
          '1. 根据方案，按时按质完成效果图制作，负责对内活动宣传海报、手册、易拉宝等物料设计。\n2. 参与相关活动设计的方案讨论，分析项目要求，深度挖掘客户需求，协助团队确定设计方案，跟进并推动项目进程，100% 确保各项工作按质按量完成。',
      },
    ],
  },
  教育经历: {
    title: '教育经历',
    subtitle: 'EDUCATION / BACKGROUND',
    sections: [
      {
        label: '学校',
        body: '河海大学，水利水电工程。工程背景强化了结构化思考、系统拆解和项目推进能力。',
      },
      {
        label: '基础信息',
        body:
          '1997.09，浙江宁波，现居杭州萧山。求职意向：视觉设计经理 / 主管。',
      },
      {
        label: '作品链接',
        body:
          '站酷主页：https://www.zcool.com.cn/u/28852059。可结合网页作品集继续展示视觉优化提升、跨境电商可视化模型、专业技能培训和品牌曝光推广项目。',
      },
    ],
  },
};

export const servicesSection = {
  eyebrow: 'Services',
  title: '关于我',
  description:
    '我相信，优秀的设计不仅追求视觉上的美感，更关注人与产品之间的连接。每一个项目都始于理解用户需求，终于创造真实价值。我希望通过设计，让复杂的问题变得简单，让产品体验更加自然、高效。',
};

export const contact = {
  eyebrow: 'Contact',
  title: '一起把想法变成可落地的 AI 视觉作品',
  description:
    '如果你正在寻找 AIGC 视觉设计、AI 图像生成、产品视觉、品牌物料或团队 AI 工作流优化支持，可以联系我进一步沟通。',
  emailCta: '发送邮件',
  phoneCta: '电话沟通',
};
