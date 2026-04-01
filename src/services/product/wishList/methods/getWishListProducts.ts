import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WishListProductArrayType } from '@src/services/product/wishList/types/genericTypes';

type getWishListProductsType = { id?: number };

export const getWishListProducts = async ({ id }: getWishListProductsType) => {
  const wishListProductsResponse = await AsyncStorage.getItem(keysLocalStorage.wishListProducts);

  let wishListProductsData: WishListProductArrayType = wishListProductsResponse
    ? JSON.parse(wishListProductsResponse)
    : [];

  if (id) {
    const itemFindById = wishListProductsData.find((item) => item.id === id);

    if (itemFindById) {
      wishListProductsData = [itemFindById];
    }
  }

  return wishListProductsData;
};
