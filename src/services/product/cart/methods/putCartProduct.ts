import { genericStatus } from '@src/services/genericTypes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManagement } from '@src/services/apiManagement';
import { getCartProducts } from '@src/services/product/cart/methods/getCartProducts';
import {
  cartProductArrayType,
  cartProductObjectType,
} from '@src/services/product/cart/types/genericTypes';

type putCartProductType = { id: number; removeFromCart?: boolean };

// Using id to be something like a real API
export const putCartProduct = async ({ id, removeFromCart = false }: putCartProductType) => {
  const productByIdData = await getProducts({ id });

  const productToBeInCart = productByIdData?.[0];

  const cartProducts = await getCartProducts({});

  let status: genericStatus = { messageSuccess: null };

  let data: cartProductArrayType | null = null;

  if (productToBeInCart != null && !removeFromCart) {
    let newCartProductData: cartProductObjectType | null = null;

    const idProductAlreadyInCart = cartProducts?.find((product) => product?.id === id)?.id;

    if (idProductAlreadyInCart) {
      cartProducts[idProductAlreadyInCart].quantity += 1;
    } else {
      newCartProductData = {
        ...productToBeInCart,
        quantity: 1,
      };
    }

    const arrayToConvertJson = newCartProductData
      ? [...cartProducts, newCartProductData]
      : [...cartProducts];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.cartProducts, jsonValue);

    status.messageSuccess = 'Product has added to cart!';
  } else if (productToBeInCart != null && removeFromCart) {
    const arrayWithoutProduct = cartProducts?.filter((item) => item?.id != productToBeInCart?.id);

    const arrayToConvertJson = [...arrayWithoutProduct];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.cartProducts, jsonValue);

    status.messageSuccess = 'Product has removed from cart!';
  } else if (productToBeInCart == null) {
    if (removeFromCart) {
      status.errors = { product: 'Failed to remove the product from cart' };
    } else {
      status.errors = { product: 'Could not add the product to cart' };
    }
  }

  await apiManagement(status);

  return { ...status, data: data };
};
