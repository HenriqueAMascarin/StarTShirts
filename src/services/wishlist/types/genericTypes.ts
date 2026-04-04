import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

export interface WishlistProductObjectType extends ProductObjectType {
  wishlisted: boolean;
}

export type WishlistProductArrayType = WishlistProductObjectType[];
