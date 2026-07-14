import { assetPath } from './assetPath.js';
import { r2AssetPath } from './r2AssetPath.js';

const visualModelThumbnailPositions = [
  'center 68%',
  'center 48%',
  'center 50%',
  'center 52%',
  'center 56%',
  'center 56%',
];

const otherWorkImages = [
  {
    fileName: '视觉优化-数据3.png',
    alt: '视觉优化数据 3',
    aspect: 'landscape',
  },
  {
    fileName: '视觉优化-数据2.png',
    alt: '视觉优化数据 2',
    aspect: 'landscape',
  },
  {
    fileName: '1视觉工作跟紧仪表盘.png',
    alt: '视觉工作跟进仪表盘',
    aspect: 'standard',
  },
  {
    fileName: '3项目综合管理仪表盘.png',
    alt: '项目综合管理仪表盘',
    aspect: 'square',
  },
  {
    fileName: '视觉优化提升思路.png',
    alt: '视觉优化提升思路',
    aspect: 'tall',
  },
  {
    fileName: '2 视觉全景看板.png',
    alt: '视觉全景看板',
    aspect: 'square',
  },
  {
    fileName: '视觉优化分析材料.png',
    alt: '视觉优化分析材料',
    aspect: 'tall',
  },
  {
    fileName: '视觉优化数据整理.png',
    alt: '视觉优化数据整理',
    aspect: 'landscape',
  },
].map((image) => ({
  ...image,
  src: r2AssetPath(`其他/${image.fileName}`),
  previewAspect: image.aspect,
}));

const visualModelMedia = Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');

    return {
      src: assetPath(`portfolio/other/visual-model-${number}.mp4`),
      displaySrc: assetPath(`portfolio/other-display/visual-model-${number}.mp4`),
      previewSrc: assetPath(`portfolio/other-posters/visual-model-${number}.jpg`),
      alt: `可视化模型 ${index + 1}`,
      aspect: 'tall',
      thumbnailPosition: visualModelThumbnailPositions[index],
      type: 'video',
    };
  });

export const otherMedia = [
  ...visualModelMedia,
  {
    src: assetPath('portfolio/other/logo-design.jpg'),
    previewSrc: assetPath('portfolio/other-posters/logo-design.jpg'),
    alt: 'Logo 设计',
    aspect: 'tall',
  },
  ...otherWorkImages,
];
