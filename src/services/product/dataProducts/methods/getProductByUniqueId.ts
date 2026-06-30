import { productsList } from '@src/services/product/dataProducts/data/productsList';

export type getProductsByIdType = { id?: string };

export const getProductByUniqueId = async ({ id }: getProductsByIdType) => {
  const productsData = productsList;

  let productFindById = productsData.find((data) =>
    data.colors.some((color) => object === id),
  );

  if (productFindById != null && id) {
    

    productFindById.uniqueId = id;

    productFindById.size = 
  }

  return productFindById;
};
