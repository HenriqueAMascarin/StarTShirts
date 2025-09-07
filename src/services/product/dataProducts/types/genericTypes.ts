import { ImageURISource } from 'react-native';

export type ProductColorsType = 'white' | 'blue' | 'red';

export type TypeProducts = 'tShirt';

export type ProductObjectType = {
  title: string;
  price: number;
  colors: {color: ProductColorsType, urlImage: ImageURISource | null, isSelected: boolean}[];
  id: number;
  type: TypeProducts
  details: {
    info: string,
    list: string[]
  }
};
