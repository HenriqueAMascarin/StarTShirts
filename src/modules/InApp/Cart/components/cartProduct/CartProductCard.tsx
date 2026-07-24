import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React from 'react';
import { stylesCartProductCard } from '@src/modules/InApp/Cart/components/cartProduct/styles/stylesCartProductCard.ts';
import { putCartProduct } from '@src/services/product/cart/methods/putCartProduct';
import { cartProductObjectType } from '@src/services/product/cart/types/genericTypes';
import {
  QuantityChanger,
  TypeQuantityChanger,
} from '@src/modules/InApp/Cart/components/quantity/QuantityChanger.tsx';

interface CartProductCardType extends cartProductObjectType {
  getCartProductsAndSetToState: Function;
}

export default function CartProductCard({
  title,
  price,
  size,
  uniqueId,
  quantityPrice,
  quantity,
  productWithColor,
  getCartProductsAndSetToState,
}: CartProductCardType) {
  const realQuantityPrice = '$' + quantityPrice;

  const realPrice = '$' + price;

  async function changeQuantityFn({
    removeFromCart = false,
  }: Parameters<TypeQuantityChanger['changeQuantityFn']>[0]) {
    const response = await putCartProduct({
      uniqueId,
      removeFromCart,
    });

    if (response?.messageSuccess) {
      await getCartProductsAndSetToState();
    }
  }

  return (
    <View style={stylesCartProductCard.container}>
      <View style={stylesCartProductCard.imageContainer}>
        {productWithColor?.urlImage != null && (
          <Image
            alt={title}
            width={125}
            height={135}
            source={productWithColor?.urlImage}
            style={stylesCartProductCard.image}
          />
        )}
      </View>

      <View style={stylesCartProductCard.infoContainer}>
        <TextDefault style={stylesCartProductCard.normalText}>{title}</TextDefault>

        <TextDefault style={stylesCartProductCard.normalText}>
          Color:{' '}
          <TextDefault style={stylesCartProductCard.infoText}>
            {productWithColor?.color}
          </TextDefault>
        </TextDefault>

        <TextDefault style={stylesCartProductCard.normalText}>
          Size: <TextDefault style={stylesCartProductCard.infoText}>{size}</TextDefault>
        </TextDefault>

        <QuantityChanger quantity={quantity} changeQuantityFn={changeQuantityFn} />

        <TextDefault style={stylesCartProductCard.normalText}>
          Quantity:{' '}
          <TextDefault style={stylesCartProductCard.infoText}>{realQuantityPrice}</TextDefault>
        </TextDefault>
      </View>

      <View style={stylesCartProductCard.infoContainer}>
        <TextDefault style={stylesCartProductCard.normalText}>{realPrice}</TextDefault>
      </View>
    </View>
  );
}
