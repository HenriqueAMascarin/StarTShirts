import { ProductObjectType } from 'src/services/product/dataProducts/types/genericTypes';

type typeMakeProductArray = {
  dataProduct: {
    productTitle: ProductObjectType['title'];
    productPrice: ProductObjectType['price'];
    productId: ProductObjectType['id'];
    productType: ProductObjectType['type'];
    productDetails: ProductObjectType['details'];
    productColors: ProductObjectType['colors'];
  };
  productWithAllColors: ProductObjectType['productWithAllColors'];
  productSizes: ProductObjectType['sizes'];
  productUniqueIds: ProductObjectType['productWithUniqueIds'];
};

export function makeProductsArray({
  dataProduct,
  productWithAllColors,
  productSizes,
  productUniqueIds,
}: typeMakeProductArray) {
  const productsArray: ProductObjectType[] = dataProduct.productColors
    .map((color, indexColor) => {
      const newProductArray = productSizes.map((size, indexSize): ProductObjectType => {
        const productWithColor = productWithAllColors.find(
          (productColor) => productColor.color === color,
        ) as ProductObjectType['productWithColor'];

        return {
          title: dataProduct.productTitle,
          price: dataProduct.productPrice,
          wishlisted: false,
          productToShowInSearch: indexColor == 1 && indexSize == 1,
          productWithColor,
          productWithAllColors,
          id: dataProduct.productId,
          uniqueId: productUniqueIds[size].white,
          size,
          type: dataProduct.productType,
          details: dataProduct.productDetails,
          productWithUniqueIds: productUniqueIds,
          sizes: productSizes,
          colors: dataProduct.productColors,
        };
      });

      return newProductArray;
    })
    .flat();

  return productsArray;
}
