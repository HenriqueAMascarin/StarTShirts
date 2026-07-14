import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WishlistProductArrayType } from '@src/services/product/wishlist/types/genericTypes';

type getWishlistProductsType = { uniqueId?: string };

export const getWishlistProducts = async ({ uniqueId }: getWishlistProductsType) => {
  const wishlistProductsResponse = await AsyncStorage.getItem(keysLocalStorage.wishlistProducts);

  let wishlistProductsData: WishlistProductArrayType = wishlistProductsResponse
    ? JSON.parse(wishlistProductsResponse)
    : [];

  if (uniqueId) {
    const itemFindById = wishlistProductsData.find((item) => item.uniqueId === uniqueId);

    if (itemFindById) {
      wishlistProductsData = [itemFindById];
    }
  }

  return wishlistProductsData;
};
