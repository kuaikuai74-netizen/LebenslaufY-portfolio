import { assetPath } from './assetPath.js';

const aplusLongImageFiles = [
  "aplus-long-01.png",
  "aplus-long-02.png",
  "aplus-long-03.png",
  "aplus-long-04.png",
  "aplus-long-05.png",
  "aplus-long-06.png",
  "aplus-long-07.png",
  "aplus-long-08.png",
  "aplus-long-09.png",
  "aplus-long-10.png",
  "aplus-long-11.png",
  "aplus-long-12.png",
  "aplus-long-13.png",
  "aplus-long-14.png",
  "aplus-long-15.png"
];

export const aplusLongImages = aplusLongImageFiles.map((fileName, index) => ({
  src: assetPath(`portfolio/aplus-long/${fileName}`),
  displaySrc: assetPath(`portfolio/aplus-long-display/${fileName.replace('.png', '.jpg')}`),
  previewSrc: assetPath(`portfolio/aplus-long-preview/${fileName.replace('.png', '.jpg')}`),
  alt: `A+ 详情页长图 ${index + 1}`,
  aspect: 'tall',
}));
