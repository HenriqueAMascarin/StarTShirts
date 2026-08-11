import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

export interface cartProductObjectType extends ProductObjectType {
  quantity: number;
  quantityPrice: number;
}

export type cartProductsType = { total: number; cartWithProducts: cartProductObjectType[] };
