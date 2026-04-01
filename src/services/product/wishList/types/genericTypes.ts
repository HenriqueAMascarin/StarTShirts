import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

export interface WishListProductObjectType extends ProductObjectType {
  wishlisted: boolean;
}

export type WishListProductArrayType = WishListProductObjectType[];
