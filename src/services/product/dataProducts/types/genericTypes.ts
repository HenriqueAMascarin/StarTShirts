import { ImageURISource } from 'react-native';

export type ProductColorsType = 'white' | 'blue' | 'red';

export type ProductObjectType = {
  title: string;
  price: number;
  colors: {color: ProductColorsType, urlImage: ImageURISource | null, isSelected: boolean}[];
  id: number;
  element3DPath: string;
  details: {
    info: string,
    list: string[]
  }
};
