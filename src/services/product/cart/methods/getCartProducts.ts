import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartProductArrayType } from '@src/services/product/cart/types/genericTypes';

type getCartProductsType = { id?: number };

export const getCartProducts = async ({ id }: getCartProductsType) => {
  const cartProductsResponse = await AsyncStorage.getItem(keysLocalStorage.cartProducts);

  let cartProductsData: cartProductArrayType = cartProductsResponse
    ? JSON.parse(cartProductsResponse)
    : [];

  if (id) {
    const itemFindById = cartProductsData.find((item) => item.id === id);

    if (itemFindById) {
      cartProductsData = [itemFindById];
    }
  }

  return cartProductsData;
};
