import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

type typeMakeProductArray = {
  dataProduct: {
    productTitle: ProductObjectType['title'];
    productPrice: ProductObjectType['price'];
    productType: ProductObjectType['type'];
    productDetails: ProductObjectType['details'];
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
  const productsArray: ProductObjectType[] = productWithAllColors
    .map((objectColor, indexColor) => {
      const newProductArray = productSizes.map((size, indexSize): ProductObjectType => {
        const productWithColor = productWithAllColors.find(
          (productColor) => productColor.color == objectColor.color,
        ) as ProductObjectType['productWithColor'];

        const uniqueId = productUniqueIds?.[size]?.[productWithColor?.color];

        return {
          title: dataProduct?.productTitle,
          price: dataProduct?.productPrice,
          wishlisted: false,
          productToShowInSearch: indexColor == 0 && indexSize == 0,
          productWithColor,
          productWithAllColors,
          uniqueId,
          size,
          type: dataProduct?.productType,
          details: {
            ...dataProduct?.productDetails,
            list: [...dataProduct?.productDetails?.list, `Item #${uniqueId}`],
          },
          productWithUniqueIds: productUniqueIds,
          sizes: productSizes,
        };
      });

      return newProductArray;
    })
    .flat();

  return productsArray;
}
