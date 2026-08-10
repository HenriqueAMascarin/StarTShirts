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

function returnThePropThatIsUndefined(props: typeMakeProductArray) {
  let undefinedPropName: null | string = null;

  const typedObjectKeys = Object.keys(props) as (keyof typeMakeProductArray)[];

  for (let keyProp of typedObjectKeys) {
    if (keyProp == 'dataProduct') {
      const typedObjectDataProductKeys = Object.keys(
        props?.dataProduct,
      ) as (keyof typeMakeProductArray['dataProduct'])[];

      for (let keyChildren of typedObjectDataProductKeys) {
        if (props?.dataProduct?.[keyChildren] == undefined) {
          undefinedPropName = `dataProduct.${keyChildren}`;
        }
      }
    }

    if (props?.[keyProp] == undefined) {
      undefinedPropName = keyProp;
    }
  }

  return { undefinedPropName };
}

export function makeProductsArray(props: typeMakeProductArray) {
  const { undefinedPropName } = returnThePropThatIsUndefined(props);

  if (undefinedPropName != null) {
    throw new Error(`Error: missing the prop ${undefinedPropName}`);
  }

  const { dataProduct, productWithAllColors, productSizes, productUniqueIds } = props;

  const productsArray = productWithAllColors
    ?.map((productWithColor, indexColor) => {
      const newProductArray = productSizes?.map((size, indexSize): ProductObjectType => {
        const uniqueId = productUniqueIds?.[size]?.[productWithColor?.color];

        if (uniqueId != undefined) {
          return {
            title: dataProduct?.productTitle,
            price: dataProduct?.productPrice,
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
        } else {
          throw new Error(
            `Error: missing uniqueId - The color ${productWithColor?.color} don't exist in size ${size}`,
          );
        }
      });

      return newProductArray;
    })
    .flat();

  return productsArray;
}
