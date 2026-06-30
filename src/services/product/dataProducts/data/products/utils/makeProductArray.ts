import { ProductColorsType, TypeProductSizes, TypeProductUniqueIds, TypeProductWithColor } from "src/services/product/dataProducts/types/genericTypes";

type typeMakeProductArray = {
  dataProduct: {
    productTitle: string;
    productPrice: string;
    productId: string;
    productType: string;
    productDetails: {
      info: string;
      list: string[];
    };
    productColors: ProductColorsType[]
  };
  productWithColors: TypeProductWithColor;
  productSizes: TypeProductSizes;
  productUniqueIds: TypeProductUniqueIds;
};

export function makeProductArray({
  dataProduct,
  productWithColors,
  productSizes,
  productUniqueIds,
}: typeMakeProductArray) {
  dataProduct.productColors.map((color, indexColor) => {
    const newProductArray = productSizes.map((size, indexSize) => {
      return {
        title: dataProduct.productTitle,
        price: dataProduct.productPrice,
        wishlisted: false,
        productWithColor: productWithColors[color],
        id: dataProduct.productId,
        uniqueId: productUniqueIds[size].white,
        size,
        type: dataProduct.productType,
        productToShowInSearch: indexColor == 1 && indexSize == 1,
        details: dataProduct.productDetails,
        productWithUniqueIds: productUniqueIds,
        sizes: productSizes,
        colors: dataProduct.productColors,
      };
    });

    return newProductArray;
  });
}
