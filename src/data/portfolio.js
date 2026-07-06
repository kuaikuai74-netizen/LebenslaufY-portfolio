import { aplusLongImages } from './aplusLongImages.js';
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
      details: [
        '根据产品卖点拆分镜头语言，明确开场、细节、使用场景和收束画面。',
        '结合图生视频、剪辑和调色流程，将静态视觉延展为适合社媒传播的动态内容。',
        '沉淀提示词、参考图和镜头规则，方便团队复用同类产品的视频生产流程。',
      ],
      images: [
        {
          src: '/portfolio/reference-motion.mp4',
          alt: 'AI 产品动态视觉参考',
          aspect: 'wide',
          type: 'video',
        },
        {
          src: '/portfolio/ai-sofa-workflow.png',
          alt: '沙发 AI 视频工作流分镜',
          aspect: 'wide',
        },
        {
          src: '/portfolio/sofa-main.jpg',
          alt: '沙发产品主图参考',
          aspect: 'square',
        },
      ],
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
      details: [
        '根据品牌定位控制画面气质、构图和色彩，让物料既能承接商业转化，也能服务长期品牌认知。',
        '把产品图、场景图和短文案组合成适合站内外投放的视觉资产。',
        '建立可延展的视觉规则，减少重复沟通成本，并提高团队批量产出的一致性。',
      ],
      images: [
        {
          src: '/portfolio/sofa-main.jpg',
          alt: '沙发品牌主图视觉',
          aspect: 'square',
        },
        {
          src: '/portfolio/dresser-main/main-03.jpg',
          alt: '家居品牌场景视觉',
          aspect: 'square',
        },
        {
          src: '/portfolio/dresser-main/main-06.jpg',
          alt: '生活方式场景视觉',
          aspect: 'square',
        },
      ],
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
