const brandImageFiles = [
  {
    fileName: 'five-secs-brand-system.png',
    previewFileName: 'previews/five-secs-brand-system-preview.png',
    alt: 'FIVE SECS 运动服饰品牌视觉系统长图',
  },
  {
    fileName: 'miaoyin-brand-system.png',
    previewFileName: 'previews/miaoyin-brand-system-preview.png',
    alt: 'MIAOYIN 宠物营养品牌视觉系统长图',
  },
  {
    fileName: 'kafier-brand-system.png',
    previewFileName: 'previews/kafier-brand-system-preview.png',
    alt: 'Kafier 户外品牌视觉系统长图',
  },
  ...Array.from({ length: 12 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');

    return {
      fileName: `brand-material-${number}.png`,
      previewFileName: `previews/brand-material-${number}-preview.png`,
      alt: `品牌传播物料 ${index + 1}`,
    };
  }),
];

export const brandImages = brandImageFiles.map((image) => ({
  src: `/portfolio/brand-campaign/${image.fileName}`,
  previewSrc: `/portfolio/brand-campaign/${image.previewFileName}`,
  alt: image.alt,
  aspect: 'long',
}));
