import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { productsList } from '@src/services/product/dataProducts/data/productsList';

type typeProductData = ProductObjectType[];

export type getProductsByIdType = { id?: number };

export const getProducts = async ({ id }: getProductsByIdType): Promise<typeProductData> => {
  let productsData = productsList;

  if (id) {
    const findById = productsData.find((request) => request.id === id);

    if (findById) {
      productsData = [findById];
    }
  }

  return productsData;
};
