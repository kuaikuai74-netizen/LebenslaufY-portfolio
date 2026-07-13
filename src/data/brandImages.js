import { r2AssetPath } from './r2AssetPath.js';

const brandImageFiles = [
  {
    fileName: '未标题-1-02.jpg',
    alt: 'FIVE SECS 运动服饰品牌视觉系统长图',
  },
  {
    fileName: '未标题-1-03.jpg',
    alt: 'MIAOYIN 宠物营养品牌视觉系统长图',
  },
  {
    fileName: '未标题-1-01.jpg',
    alt: 'Kafier 户外品牌视觉系统长图',
  },
  {
    fileName: '未标题-1-04.jpg',
    alt: '串意烧烤品牌视觉系统长图',
  },
  ...Array.from({ length: 12 }, (_, index) => {
    const group = index < 6 ? '1' : '2';
    const groupIndex = (index % 6) + 1;

    return {
      fileName: `${group} (${groupIndex}).png`,
      alt: `品牌传播物料 ${index + 1}`,
    };
  }),
];

export const brandImages = brandImageFiles.map((image) => ({
  src: r2AssetPath(`品牌物料/${image.fileName}`),
  thumbnailSrc: r2AssetPath(`品牌物料/${image.fileName}`),
  alt: image.alt,
  aspect: 'long',
}));
