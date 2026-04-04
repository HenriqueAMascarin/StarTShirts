import { genericStatus } from '@src/services/genericTypes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { getWishlistProducts } from '@src/services/wishlist/methods/getWishlistProducts';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManagement } from '@src/services/apiManagement';
import {
  WishlistProductArrayType,
  WishlistProductObjectType,
} from '@src/services/wishlist/types/genericTypes';

type putWishlistProductType = { id: number; removeFromWishlist: boolean };

// Using id to be something like a real API
export const putWishlistProduct = async ({ id, removeFromWishlist }: putWishlistProductType) => {
  const productByIdData = await getProducts({ id });

  const productWishlist = productByIdData?.[0];

  const wishlistProducts = await getWishlistProducts({});

  let status: genericStatus = { messageSuccess: null };

  let data: WishlistProductArrayType | null = null;

  if (productWishlist != null && !removeFromWishlist) {
    const newWishlistProductData: WishlistProductObjectType = {
      ...productWishlist,
      wishlisted: true,
    };

    const arrayToConvertJson = wishlistProducts
      ? [...wishlistProducts, newWishlistProductData]
      : [newWishlistProductData];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.wishlistProducts, jsonValue);

    status.messageSuccess = 'Product has been added to your wishlist!';
  } else if (productWishlist != null && removeFromWishlist) {
    const arrayWithoutProduct = wishlistProducts?.filter((item) => item?.id != productWishlist?.id);

    const arrayToConvertJson = [...arrayWithoutProduct];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.wishlistProducts, jsonValue);

    status.messageSuccess = 'Product has been removed from your wishlist!';
  } else if (productWishlist == null) {
    if (removeFromWishlist) {
      status.errors = { product: 'Failed to remove the product from the wishlist' };
    } else {
      status.errors = { product: 'Could not add the product to the wishlist' };
    }
  }

  await apiManagement(status);

  return { ...status, data: data };
};
