import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypeProductArray } from '@src/services/product/dataProducts/types/genericTypes';

type getWishlistProductsType = { uniqueId?: string };

export const getWishlistProducts = async ({ uniqueId }: getWishlistProductsType) => {
  const wishlistProductsResponse = await AsyncStorage.getItem(keysLocalStorage.wishlistProducts);

  let wishlistProductsData: TypeProductArray = wishlistProductsResponse
    ? JSON.parse(wishlistProductsResponse)
    : [];

  if (uniqueId) {
    wishlistProductsData = wishlistProductsData?.filter((product) => product?.uniqueId == uniqueId);
  }

  return wishlistProductsData;
};
