import { productsList } from '@src/services/product/dataProducts/data/productsList';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

describe('productsList', () => {
  it('Should have several products with the exact main pattern', () => {
    const keysToContainInObjectProduct: (keyof ProductObjectType)[] = [
      'title',
      'price',
      'productToShowInSearch',
      'productWithColor',
      'productWithAllColors',
      'uniqueId',
      'size',
      'type',
      'details',
      'productWithUniqueIds',
      'sizes',
    ];

    const allTheProductsHaveTheExactPattern = productsList?.every((product) => {
      let hasExactPattern = false;

      const productKeys = Object.keys(product);

      for (const keyToContain of keysToContainInObjectProduct) {
        hasExactPattern = productKeys?.includes(keyToContain);
      }

      return hasExactPattern;
    });

    expect(allTheProductsHaveTheExactPattern).toEqual(true);
  });

  it('Should have several products with an uniqueId different than null', () => {
    const allTheProductsContainUniqueId = productsList?.every(
      (product) => product?.uniqueId != null,
    );

    expect(allTheProductsContainUniqueId).toEqual(true);
  });

  it('Should have several products without duplicate uniqueIds', () => {
    const uniqueIds = productsList?.map((product) => product?.uniqueId);

    // Set don't have duplicates
    const setOfUniqueIds = new Set(uniqueIds);

    expect(setOfUniqueIds?.size).toEqual(uniqueIds?.length);
  });
});
