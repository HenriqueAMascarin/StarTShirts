import { genericStatus } from '@src/services/genericTypes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { getWishListProducts } from '@src/services/product/wishList/methods/getWishListProducts';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManagement } from '@src/services/apiManagement';
import {
  WishListProductArrayType,
  WishListProductObjectType,
} from '@src/services/product/wishList/types/genericTypes';

type putWishListProductType = { id: number; removeFromWishList: boolean };

// Using id to be something like a real API
export const putWishListProduct = async ({ id, removeFromWishList }: putWishListProductType) => {
  const productByIdData = await getProducts({ id });

  const productWishList = productByIdData?.[0];

  const wishListProducts = await getWishListProducts({});

  let status: genericStatus = { messageSuccess: null };

  let data: WishListProductArrayType | null = null;

  if (productWishList != null && !removeFromWishList) {
    const newWishListProductData: WishListProductObjectType = {
      ...productWishList,
      wishlisted: true,
    };

    const arrayToConvertJson = wishListProducts
      ? [...wishListProducts, newWishListProductData]
      : [newWishListProductData];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.wishListProducts, jsonValue);

    status.messageSuccess = 'Product has been added to your wish list!';
  } else if (productWishList != null && removeFromWishList) {
    const arrayWithoutProduct = wishListProducts?.filter((item) => item?.id != productWishList?.id);

    const arrayToConvertJson = [...arrayWithoutProduct];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.wishListProducts, jsonValue);

    status.messageSuccess = 'Product has been removed from your wish list!';
  } else if (productWishList == null) {
    if (removeFromWishList) {
      status.errors = { product: 'Failed to remove the product from the wish list' };
    } else {
      status.errors = { product: 'Could not add the product to the wish list' };
    }
  }

  await apiManagement(status);

  return { ...status, data: data };
};
