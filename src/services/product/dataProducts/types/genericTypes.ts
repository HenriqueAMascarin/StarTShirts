import { ImageURISource } from 'react-native';

export type ProductColorsType = 'white' | 'blue' | 'red';

export type TypeProducts = 'tShirt';

export type TypeProductWithColor = {
  color: ProductColorsType;
  urlImage: ImageURISource | null;
  colorId: string;
};

type TypeProductWithColors = TypeProductWithColor[];

type TypeProductSizes = ('xs' | 's' | 'm' | 'l' | 'xl' | 'xxl')[];

type TypeProductUniqueIds = {
  [key in TypeProductSizes[number]]: { [color in ProductColorsType]: string };
};

export type ProductObjectType = {
  title: string;
  price: number;
  wishlisted: boolean;
  productToShowInSearch: boolean;
  productWithColor: TypeProductWithColor;
  productWithAllColors: TypeProductWithColors;
  uniqueId: string;
  size: TypeProductSizes[number];
  type: TypeProducts;
  details: {
    info: string;
    list: string[];
  };
  productWithUniqueIds: TypeProductUniqueIds;
  sizes: TypeProductSizes;
};
