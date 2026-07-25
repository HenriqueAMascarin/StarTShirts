import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartProductsType } from '@src/services/product/cart/types/genericTypes';

export const getCartProducts = async () => {
  const cartProductsResponse = await AsyncStorage.getItem(keysLocalStorage.cartProducts);

  let cartProductsData: cartProductsType = cartProductsResponse
    ? JSON.parse(cartProductsResponse)
    : [];

  return cartProductsData;
};
