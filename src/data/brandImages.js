const brandImageFiles = [
  "brand-campaign-01.png",
  "brand-campaign-02.png",
  "brand-campaign-03.png",
  "brand-campaign-04.png",
  "brand-campaign-05.png",
  "brand-campaign-06.png",
  "brand-campaign-07.png",
  "brand-campaign-08.png",
  "brand-campaign-09.png",
  "brand-campaign-10.png",
  "brand-campaign-11.png",
  "brand-campaign-12.png",
  "brand-campaign-13.png",
  "brand-campaign-14.png",
  "brand-campaign-15.png",
  "brand-campaign-16.png",
  "brand-campaign-17.png",
  "brand-campaign-18.png"
];

export const brandImages = brandImageFiles.map((fileName, index) => ({
  src: `/portfolio/brand-campaign/${fileName}`,
  alt: `品牌传播物料 ${index + 1}`,
  aspect: 'wide',
}));
