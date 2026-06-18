import { ProductObjectType } from "@src/services/product/dataProducts/types/genericTypes";

export interface cartProductObjectType extends ProductObjectType {
  quantity: number;
}

export type cartProductArrayType = cartProductObjectType[];