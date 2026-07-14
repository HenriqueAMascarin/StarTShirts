import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { productsList } from '@src/services/product/dataProducts/data/productsList';

type typeProductData = ProductObjectType[];

export type getProductsByIdType = { uniqueId?: string; onlyProductsToShowInSearch?: boolean };

export const getProducts = async ({
  uniqueId,
  onlyProductsToShowInSearch,
}: getProductsByIdType): Promise<typeProductData> => {
  let productsData = productsList;

  if (uniqueId) {
    const findById = productsData.find((request) => request.uniqueId === uniqueId);

    if (findById) {
      productsData = [findById];
    }
  }

  if (onlyProductsToShowInSearch) {
    productsData = productsData.filter((product) => product.productToShowInSearch);
  }

  return productsData;
};
