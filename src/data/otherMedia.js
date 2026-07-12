import { assetPath } from './assetPath.js';

const visualModelThumbnailPositions = [
  'center 68%',
  'center 48%',
  'center 50%',
  'center 52%',
  'center 56%',
  'center 56%',
];

export const otherMedia = [
  {
    src: assetPath('portfolio/other/logo-design.jpg'),
    previewSrc: assetPath('portfolio/other-posters/logo-design.jpg'),
    alt: 'Logo 设计',
    aspect: 'tall',
  },
  ...Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');

    return {
      src: assetPath(`portfolio/other/visual-model-${number}.mp4`),
      previewSrc: assetPath(`portfolio/other-posters/visual-model-${number}.jpg`),
      alt: `可视化模型 ${index + 1}`,
      aspect: 'tall',
      thumbnailPosition: visualModelThumbnailPositions[index],
      type: 'video',
    };
  }),
];
