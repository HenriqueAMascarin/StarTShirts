import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WishlistProductArrayType } from '@src/services/wishlist/types/genericTypes';

type getWishlistProductsType = { id?: number };

export const getWishlistProducts = async ({ id }: getWishlistProductsType) => {
  const wishlistProductsResponse = await AsyncStorage.getItem(keysLocalStorage.wishlistProducts);

  let wishlistProductsData: WishlistProductArrayType = wishlistProductsResponse
    ? JSON.parse(wishlistProductsResponse)
    : [];

  if (id) {
    const itemFindById = wishlistProductsData.find((item) => item.id === id);

    if (itemFindById) {
      wishlistProductsData = [itemFindById];
    }
  }

  return wishlistProductsData;
};
