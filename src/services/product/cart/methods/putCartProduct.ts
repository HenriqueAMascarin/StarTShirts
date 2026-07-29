import { genericStatus } from '@src/services/genericTypes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManagement } from '@src/services/apiManagement';
import { getCartProducts } from '@src/services/product/cart/methods/getCartProducts';
import {
  cartProductsType,
  cartProductObjectType,
} from '@src/services/product/cart/types/genericTypes';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

type putCartProductType = { uniqueId: ProductObjectType['uniqueId']; removeFromCart?: boolean };

type changePriceType = { price: number; quantity: number };

function returnChangePrice({ price, quantity }: changePriceType) {
  const newPrice = Number(Number(price * quantity).toFixed(2));

  return newPrice;
}

function returnTotal({ items }: { items: cartProductsType['cartWithProducts'] }) {
  let total = 0;

  items.forEach((item) => (total += item?.price));

  return total;
}

// Using id to be something like a real API
export const putCartProduct = async ({ uniqueId, removeFromCart = false }: putCartProductType) => {
  let status: genericStatus = { messageSuccess: null };

  let data: cartProductsType | null = null;

  const productByIdData = await getProducts({ uniqueId });

  const productToBeInCart = productByIdData?.[0];

  const cartProducts = await getCartProducts();

  let newCartProducts = cartProducts?.cartWithProducts ?? [];

  const indexProductAlreadyInCart = cartProducts?.cartWithProducts?.findIndex(
    (product) => product?.uniqueId === uniqueId,
  );

  const hasProductAlreadyInCart = indexProductAlreadyInCart > -1;

  if (productToBeInCart && !removeFromCart) {
    if (hasProductAlreadyInCart) {
      const itemInCart = newCartProducts?.[indexProductAlreadyInCart];

      newCartProducts[indexProductAlreadyInCart].quantity += 1;

      newCartProducts[indexProductAlreadyInCart].price = returnChangePrice({
        price: itemInCart?.quantityPrice,
        quantity: itemInCart?.quantity,
      });
    } else {
      let newCartProductData: cartProductObjectType = {
        ...productToBeInCart,
        quantity: 1,
        quantityPrice: productToBeInCart?.price,
      };

      newCartProductData.price = returnChangePrice({
        price: newCartProductData?.quantityPrice,
        quantity: newCartProductData?.quantity,
      });

      newCartProducts.push(newCartProductData);
    }

    data = { total: returnTotal({ items: newCartProducts }), cartWithProducts: newCartProducts };

    const jsonValue = JSON.stringify(data);

    await AsyncStorage.setItem(keysLocalStorage.cartProducts, jsonValue);

    status.messageSuccess = 'Product has added to cart!';
  } else if (productToBeInCart && removeFromCart && hasProductAlreadyInCart) {
    newCartProducts[indexProductAlreadyInCart].quantity -= 1;

    newCartProducts[indexProductAlreadyInCart].price = returnChangePrice({
      price: newCartProducts?.[indexProductAlreadyInCart]?.quantityPrice,
      quantity: newCartProducts?.[indexProductAlreadyInCart].quantity,
    });

    if (newCartProducts[indexProductAlreadyInCart].quantity <= 0) {
      newCartProducts = newCartProducts.filter((product) => product?.uniqueId != uniqueId);
    }

    data = { total: returnTotal({ items: newCartProducts }), cartWithProducts: newCartProducts };

    const jsonValue = JSON.stringify(data);

    await AsyncStorage.setItem(keysLocalStorage.cartProducts, jsonValue);

    status.messageSuccess = 'Product has removed from cart!';
  } else if (!productToBeInCart) {
    if (removeFromCart) {
      status.errors = { product: 'Failed to remove the product from cart' };
    } else {
      status.errors = { product: 'Could not add the product to cart' };
    }
  }

  await apiManagement(status);

  return { ...status, data };
};
