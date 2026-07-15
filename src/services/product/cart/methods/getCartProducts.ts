import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartProductArrayType } from '@src/services/product/cart/types/genericTypes';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

type getCartProductsType = { uniqueId?: ProductObjectType['uniqueId'] };

export const getCartProducts = async ({ uniqueId }: getCartProductsType) => {
  const cartProductsResponse = await AsyncStorage.getItem(keysLocalStorage.cartProducts);

  let cartProductsData: cartProductArrayType = cartProductsResponse
    ? JSON.parse(cartProductsResponse)
    : [];

  if (uniqueId) {
    const itemFindById = cartProductsData.find((item) => item?.uniqueId === uniqueId);

    if (itemFindById) {
      cartProductsData = [itemFindById];
    }
  }

  return cartProductsData;
};
