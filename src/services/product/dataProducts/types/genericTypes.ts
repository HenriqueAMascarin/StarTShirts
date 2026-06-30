import { ImageURISource } from 'react-native';

export type ProductColorsType = 'white' | 'blue' | 'red';

export type TypeProducts = 'tShirt';

export type TypeProductWithColor = {
  color: ProductColorsType;
  urlImage: ImageURISource | null;
  colorId: string;
}[];

export type TypeProductSizes = ['xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'];

export type TypeProductUniqueIds = {
  [key in TypeProductSizes[number]]: { [color in ProductColorsType]: string };
};

export type ProductObjectType = {
  title: string;
  price: number;
  wishlisted: boolean;
  productWithColor: TypeProductWithColor;
  id: string;
  uniqueId: string;
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  type: TypeProducts;
  details: {
    info: string;
    list: string[];
  };
  sizesIds: { xs?: '1'; s?: '2'; m?: '3'; l?: '4'; xl?: '5'; xxl?: '6' };
};
