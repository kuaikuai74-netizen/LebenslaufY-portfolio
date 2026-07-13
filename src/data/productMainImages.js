import { assetPath } from './assetPath.js';
import { r2AssetPath } from './r2AssetPath.js';

const productMainGroups = [
  {
    category: '沙发',
    project: '03-沙发主图',
    files: [
      '03-sofa-01-01.jpg',
      '03-sofa-01-02.jpg',
      '03-sofa-01-03.jpg',
      '03-sofa-01-04.jpg',
      '03-sofa-01-05.jpg',
      '03-sofa-01-06.jpg',
      '03-sofa-01-07.jpg',
    ],
  },
  {
    category: '沙发',
    project: '05-沙发主图',
    files: [
      '03-sofa-02-01.jpg',
      '03-sofa-02-02.jpg',
      '03-sofa-02-03.jpg',
      '03-sofa-02-04.jpg',
      '03-sofa-02-05.jpg',
      '03-sofa-02-06.jpg',
      '03-sofa-02-07.jpg',
      '03-sofa-02-08.jpg',
    ],
  },
  {
    category: '梳妆台',
    project: '01-梳妆台主图',
    files: [
      '02-vanity-01-01.jpg',
      '02-vanity-01-02.jpg',
      '02-vanity-01-03.jpg',
      '02-vanity-01-04.jpg',
      '02-vanity-01-05.jpg',
      '02-vanity-01-06.jpg',
      '02-vanity-01-07.jpg',
    ],
  },
  {
    category: '梳妆台',
    project: '02-梳妆台主图',
    files: [
      '02-vanity-02-01.jpg',
      '02-vanity-02-02.jpg',
      '02-vanity-02-03.jpg',
      '02-vanity-02-04.jpg',
      '02-vanity-02-05.jpg',
      '02-vanity-02-06.jpg',
      '02-vanity-02-07.jpg',
    ],
  },
  {
    category: '梳妆台',
    project: '09-梳妆台主图A+',
    files: [
      '02-vanity-03-01.jpg',
      '02-vanity-03-02.jpg',
      '02-vanity-03-03.jpg',
      '02-vanity-03-04.jpg',
      '02-vanity-03-05.jpg',
      '02-vanity-03-06.jpg',
      '02-vanity-03-07.jpg',
    ],
  },
  {
    category: '升降桌',
    project: '1',
    files: [
      '01-standing-desk-01-01.jpg',
      '01-standing-desk-01-02.jpg',
      '01-standing-desk-01-03.jpg',
      '01-standing-desk-01-04.jpg',
      '01-standing-desk-01-05.jpg',
      '01-standing-desk-01-06.jpg',
      '01-standing-desk-01-07.jpg',
    ],
  },
  {
    category: '电竞椅',
    project: '1',
    files: [
      '04-gaming-chair-01-01.jpg',
      '04-gaming-chair-01-02.jpg',
      '04-gaming-chair-01-03.jpg',
      '04-gaming-chair-01-04.jpg',
      '04-gaming-chair-01-05.jpg',
      '04-gaming-chair-01-06.jpg',
      '04-gaming-chair-01-07.jpg',
      '04-gaming-chair-01-08.jpg',
      '04-gaming-chair-01-09.jpg',
      '04-gaming-chair-01-10.png',
      '04-gaming-chair-01-11.png',
    ],
  },
  {
    category: '电竞椅',
    project: '2',
    files: [
      '04-gaming-chair-02-01.png',
      '04-gaming-chair-02-02.png',
      '04-gaming-chair-02-03.png',
      '04-gaming-chair-02-04.png',
      '04-gaming-chair-02-05.png',
      '04-gaming-chair-02-06.png',
      '04-gaming-chair-02-07.png',
      '04-gaming-chair-02-08.png',
      '04-gaming-chair-02-09.png',
    ],
  },
  {
    category: '电竞椅',
    project: '3',
    files: [
      '04-gaming-chair-03-01.png',
      '04-gaming-chair-03-02.png',
      '04-gaming-chair-03-03.png',
      '04-gaming-chair-03-04.png',
      '04-gaming-chair-03-05.png',
      '04-gaming-chair-03-06.png',
    ],
  },
  {
    category: '电竞椅',
    project: '4',
    files: [
      '04-gaming-chair-04-01.jpg',
      '04-gaming-chair-04-02.jpg',
      '04-gaming-chair-04-03.jpg',
      '04-gaming-chair-04-04.jpg',
      '04-gaming-chair-04-05.jpg',
      '04-gaming-chair-04-06.jpg',
      '04-gaming-chair-04-07.jpg',
    ],
  },
  {
    category: '凉亭',
    project: '06-凉亭主图',
    files: [
      '05-gazebo-01-01.jpg',
      '05-gazebo-01-02.jpg',
      '05-gazebo-01-03.jpg',
      '05-gazebo-01-04.jpg',
      '05-gazebo-01-05.jpg',
      '05-gazebo-01-06.jpg',
      '05-gazebo-01-07.jpg',
    ],
  },
  {
    category: '凉亭',
    project: '16-凉亭主图A+',
    files: [
      '05-gazebo-02-01.jpg',
      '05-gazebo-02-02.jpg',
      '05-gazebo-02-03.jpg',
      '05-gazebo-02-04.jpg',
      '05-gazebo-02-05.jpg',
      '05-gazebo-02-06.jpg',
      '05-gazebo-02-07.jpg',
    ],
  },
  {
    category: '凉亭',
    project: '17-凉亭主图A+',
    files: [
      '05-gazebo-03-01.png',
      '05-gazebo-03-02.png',
      '05-gazebo-03-03.png',
      '05-gazebo-03-04.png',
      '05-gazebo-03-05.png',
      '05-gazebo-03-06.png',
      '05-gazebo-03-07.png',
    ],
  },
  {
    category: '露营车',
    project: '15-露营车主图A+',
    files: [
      '06-camping-wagon-01-01.png',
      '06-camping-wagon-01-02.png',
      '06-camping-wagon-01-03.png',
      '06-camping-wagon-01-04.png',
      '06-camping-wagon-01-05.png',
      '06-camping-wagon-01-06.png',
    ],
  },
  {
    category: '蹦床',
    project: '19-蹦床主图A+',
    files: [
      '07-trampoline-01-01.png',
      '07-trampoline-01-02.png',
      '07-trampoline-01-03.png',
      '07-trampoline-01-04.png',
      '07-trampoline-01-05.png',
      '07-trampoline-01-06.png',
    ],
  },
  {
    category: '户外桌椅',
    project: '1',
    files: [
      '08-outdoor-table-chair-01-01.jpg',
      '08-outdoor-table-chair-01-02.jpg',
      '08-outdoor-table-chair-01-03.jpg',
      '08-outdoor-table-chair-01-04.jpg',
      '08-outdoor-table-chair-01-05.jpg',
    ],
  },
  {
    category: '健身单车',
    project: '20-健身单车主图A+',
    files: [
      '09-fitness-bike-01-01.png',
      '09-fitness-bike-01-02.png',
      '09-fitness-bike-01-03.png',
      '09-fitness-bike-01-04.png',
      '09-fitness-bike-01-05.png',
      '09-fitness-bike-01-06.png',
      '09-fitness-bike-01-07.png',
    ],
  },
];

const r2ProductMainSources = {
  '沙发/03-沙发主图': {
    directory: '1、主图/1沙发/03-沙发主图',
    files: ['主图1.jpg', '主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg'],
  },
  '沙发/05-沙发主图': {
    directory: '1、主图/1沙发/05-沙发主图',
    files: ['主图1.jpg', '主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg', '主图8.jpg'],
  },
  '梳妆台/01-梳妆台主图': {
    directory: '1、主图/2梳妆台/01-梳妆台主图',
    files: ['主图1.jpg', '主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg'],
  },
  '梳妆台/02-梳妆台主图': {
    directory: '1、主图/2梳妆台/02-梳妆台主图',
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
  },
  '梳妆台/09-梳妆台主图A+': {
    directory: '1、主图/2梳妆台/09-梳妆台主图A+',
    files: ['主图2-2.jpg', '主图3-2.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7-2.jpg', '主图8.jpg'],
  },
  '升降桌/1': {
    directory: '1、主图/3升降桌/1',
    files: ['主图2 拷贝.jpg', '主图3 拷贝.jpg', '主图4 拷贝.jpg', '主图5 拷贝.jpg', '主图6 拷贝.jpg', '主图7 拷贝.jpg', '主图8 拷贝.jpg'],
  },
  '电竞椅/1': {
    directory: '1、主图/4电竞椅/1',
    files: ['主图1.jpg', '主图3.jpg', '主图 (4).jpg', '主图 (5).jpg', '主图 (6).jpg', '主图 (7).jpg', '主图 (8).jpg', '主图 (9).jpg', '主图 (10).jpg', '主图7.png', '主图8.png'],
  },
  '电竞椅/2': {
    directory: '1、主图/4电竞椅/2',
    files: ['主图1.png', '主图2.png', '主图3_.png', '主图4.png', '主图5.png', '主图6.png', '主图7.png', '主图8.png', '主图9.png'],
  },
  '电竞椅/3': {
    directory: '1、主图/4电竞椅/3',
    files: ['主图2.png', '主图3.png', '主图4-3.png', '主图5-3.png', '主图6-3.png', '主图7-5.png'],
  },
  '电竞椅/4': {
    directory: '1、主图/4电竞椅/4',
    files: ['主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg', '主图8.jpg'],
  },
  '凉亭/06-凉亭主图': {
    directory: '1、主图/5凉亭/06-凉亭主图',
    files: ['主图1.jpg', '主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg'],
  },
  '凉亭/16-凉亭主图A+': {
    directory: '1、主图/5凉亭/16-凉亭主图A+',
    files: ['主图1.jpg', '主图2.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg', '主图7.jpg'],
  },
  '凉亭/17-凉亭主图A+': {
    directory: '1、主图/5凉亭/17-凉亭主图A+',
    files: ['主图1-1.png', '主图2.png', '主图3.png', '主图4.png', '主图5.png', '主图6.png', '主图7.png'],
  },
  '露营车/15-露营车主图A+': {
    directory: '1、主图/6露营车/15-露营车主图A+',
    files: ['主图2.png', '主图3.png', '主图4.png', '主图5.png', '主图6.png', '主图7.png'],
  },
  '蹦床/19-蹦床主图A+': {
    directory: '1、主图/7蹦床/19-蹦床主图A+',
    files: ['主图2-10.png', '主图3.png', '主图4.png', '主图5.png', '主图6.png', '主图7.png'],
  },
  '户外桌椅/1': {
    directory: '1、主图/8户外桌椅/1',
    files: ['主题.jpg', '主图3.jpg', '主图4.jpg', '主图5.jpg', '主图6.jpg'],
  },
  '健身单车/20-健身单车主图A+': {
    directory: '1、主图/9健身单车/20-健身单车主图A+',
    files: ['20260706-210540.png', '主图2.png', '主图4.png', '主图5.png', '主图6.png', '主图7.png', '主图8.png'],
  },
};

export const productMainImages = productMainGroups.flatMap((group) =>
  group.files.map((fileName, index) => {
    const r2Group = r2ProductMainSources[`${group.category}/${group.project}`];

    return {
    src: r2AssetPath(`${r2Group.directory}/${r2Group.files[index]}`),
    displaySrc: assetPath(`portfolio/product-main-preview/${fileName.replace(/\.(jpg|png)$/i, '.jpg')}`),
    previewSrc: assetPath(`portfolio/product-main-preview/${fileName.replace(/\.(jpg|png)$/i, '.jpg')}`),
    thumbnailSrc: r2AssetPath(
      `thumbnails/product-main/${fileName.replace(/\.(jpg|png)$/i, '.jpg')}`,
    ),
    alt: group.category,
    aspect: 'square',
    };
  }),
);
