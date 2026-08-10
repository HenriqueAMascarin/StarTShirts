import { productsList } from '@src/services/product/dataProducts/data/productsList';

describe('productsList', () => {
  // it('Should have several products with the exact pattern', () => {
  //   const allTheProductsHaveTheExactPattern = productsList?.every(
  //     (product) => typeof product == typeof productsList,
  //   );

  //   expect(allTheProductsHaveTheExactPattern).toEqual(true);
  // });

  it('Should have several products with an uniqueId different than null', () => {
    const allTheProductsContainUniqueId = productsList?.every(
      (product) => product?.uniqueId != null,
    );

    expect(allTheProductsContainUniqueId).toEqual(true);
  });

  it('Should have several products without duplicate uniqueIds', () => {
    const uniqueIds = productsList?.map((product) => product?.uniqueId);

    const setOfUniqueIds = new Set(uniqueIds);

    expect(setOfUniqueIds?.size).toEqual(uniqueIds?.length);
  });
});
