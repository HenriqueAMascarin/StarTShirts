type productUrlImagesType = {
  white?: string;
  blue?: string;
  red?: string;
};

export type productColorsType = keyof productUrlImagesType;

export type productObjectType = {
  title: string;
  price: number;
  colors: productColorsType[];
  id: number;
  threeJsElement: string;
  urlImages: productUrlImagesType;
};
