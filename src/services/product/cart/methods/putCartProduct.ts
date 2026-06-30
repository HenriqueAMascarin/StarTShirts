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

type putCartProductType = { uniqueId: string; removeFromCart?: boolean };

// Using id to be something like a real API
export const putCartProduct = async ({ uniqueId, removeFromCart = false }: putCartProductType) => {
  let status: genericStatus = { messageSuccess: null };

  let data: cartProductArrayType | null = null;

  const productByIdData = await getProducts({ id: uniqueId });

  const productToBeInCart = productByIdData?.[0];

  const theProductExists = productToBeInCart != null;

  const cartProducts = await getCartProducts({});

  let newCartProducts = [...cartProducts];

  const idProductAlreadyInCart = cartProducts?.find((product) => product?.id === productData?.id)?.id;

  if (theProductExists && !removeFromCart) {
    let newCartProductData: cartProductObjectType | null = null;

    if (idProductAlreadyInCart) {
      newCartProducts[idProductAlreadyInCart].quantity += 1;
    } else {
      newCartProductData = {
        ...productToBeInCart,
        quantity: 1,
      };

      newCartProducts = [...newCartProducts, newCartProductData];
    }

    const arrayToConvertJson = [...newCartProducts];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.cartProducts, jsonValue);

    status.messageSuccess = 'Product has added to cart!';
  } else if (productToBeInCart != null && removeFromCart && idProductAlreadyInCart) {
    newCartProducts[idProductAlreadyInCart].quantity -= 1;

    if (newCartProducts[idProductAlreadyInCart].quantity <= 0) {
      newCartProducts = newCartProducts.filter((product) => product?.id !== id);
    }

    const arrayToConvertJson = [...newCartProducts];

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
