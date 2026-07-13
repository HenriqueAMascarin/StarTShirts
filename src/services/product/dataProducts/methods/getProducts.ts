import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { productsList } from '@src/services/product/dataProducts/data/productsList';

type typeProductData = ProductObjectType[];

export type getProductsByIdType = { id?: string; onlyProductsToShowInSearch?: boolean };

export const getProducts = async ({
  id,
  onlyProductsToShowInSearch,
}: getProductsByIdType): Promise<typeProductData> => {
  let productsData = productsList;

  if (id) {
    const findById = productsData.find((request) => request.id === id);

    if (findById) {
      productsData = [findById];
    }
  }

  if (onlyProductsToShowInSearch) {
    productsData = productsData.filter((product) => product.productToShowInSearch);
  }

  return productsData;
};
