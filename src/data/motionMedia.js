import { assetPath } from './assetPath.js';

const motionMediaFiles = [
  {
    fileName: 'motion-media-05.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-03.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-02.gif',
    type: 'image',
  },
  {
    fileName: 'motion-media-09.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-06.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-08.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-01.gif',
    type: 'image',
  },
  {
    fileName: 'motion-media-07.mp4',
    type: 'video',
  },
  {
    fileName: 'motion-media-04.mp4',
    type: 'video',
  },
];

export const motionMedia = motionMediaFiles.map((item, index) => ({
  src: assetPath(`portfolio/motion-media/${item.fileName}`),
  previewSrc: assetPath(`portfolio/motion-media-posters/${item.fileName.replace(/\.(gif|mp4)$/i, '.jpg')}`),
  alt: `AI 视频与动态视觉 ${index + 1}`,
  aspect: 'wide',
  ...(item.type === 'video' ? { type: 'video' } : {}),
}));
