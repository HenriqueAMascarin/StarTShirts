export type ProductColorsType = 'white' | 'blue' | 'red';

export type ProductObjectType = {
  title: string;
  price: number;
  colors: {color: ProductColorsType, urlImage: string}[];
  id: number;
  threeJsElement: string;
  details: {
    info: string,
    list: string[]
  }
};
