import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { stylesCartProductCard } from '@src/modules/InApp/Cart/components/cartProduct/styles/stylesCartProductCard.ts';
import { putCartProduct } from '@src/services/product/cart/methods/putCartProduct';
import { cartProductObjectType } from '@src/services/product/cart/types/genericTypes';
import {
  QuantityChanger,
  TypeQuantityChanger,
} from '@src/modules/InApp/Cart/components/quantity/QuantityChanger.tsx';
import ClickSVG from '@src/assets/svgs/click.svg';
import { useNavigation } from '@react-navigation/native';
import { firstLetterToUppercase } from '@src/utils/firstLetterToUppercase';
import { formatCurrency } from '@src/utils/formatCurrency';

interface CartProductCardType extends cartProductObjectType {
  getCartProductsAndSetToState: Function;
  index: number;
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
  index,
}: CartProductCardType) {
  const navigation = useNavigation();

  const realQuantityPrice = formatCurrency(quantityPrice);

  const realPrice = formatCurrency(price);

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

  function onViewProduct() {
    navigation.navigate('home/product', { uniqueId });
  }

  return (
    <View
      style={[
        stylesCartProductCard.container,
        stylesCartProductCard.borderVertical,
        index != 0 && { borderTopWidth: 0 },
      ]}
    >
      <TouchableHighlight
        onPressIn={onViewProduct}
        style={stylesCartProductCard.imageContainerRounded}
      >
        <View
          style={[
            stylesCartProductCard.imageContainer,
            stylesCartProductCard.imageContainerRounded,
          ]}
        >
          <View style={stylesCartProductCard.clickSVGContainer}>
            <ClickSVG width={10} height={10} />
          </View>

          {productWithColor?.urlImage != null && (
            <Image
              alt={title}
              width={55}
              height={65}
              source={productWithColor?.urlImage}
              style={stylesCartProductCard.image}
            />
          )}
        </View>
      </TouchableHighlight>

      <View>
        <TextDefault style={stylesCartProductCard.normalText}>{title}</TextDefault>

        <TextDefault style={stylesCartProductCard.normalText}>
          Color:
          <TextDefault style={stylesCartProductCard.infoText}>
            {` ${firstLetterToUppercase(productWithColor?.color)}`}
          </TextDefault>
        </TextDefault>

        <TextDefault style={stylesCartProductCard.normalText}>
          Size:
          <TextDefault
            style={stylesCartProductCard.infoText}
          >{` ${size?.toUpperCase()}`}</TextDefault>
        </TextDefault>

        <QuantityChanger quantity={quantity} changeQuantityFn={changeQuantityFn} />

        <TextDefault style={stylesCartProductCard.normalText}>
          Quantity:
          <TextDefault
            style={stylesCartProductCard.infoText}
          >{` ${realQuantityPrice}`}</TextDefault>
        </TextDefault>
      </View>

      <View style={stylesCartProductCard.realPriceContainer}>
        <TextDefault style={stylesCartProductCard.priceText}>{realPrice}</TextDefault>
      </View>
    </View>
  );
}
