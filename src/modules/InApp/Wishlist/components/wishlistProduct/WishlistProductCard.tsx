import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, TouchableHighlight, View } from 'react-native';
import React from 'react';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import { putWishlistProduct } from '@src/services/product/wishlist/methods/putWishlistProduct';
import { stylesWishlistProductCard } from '@src/modules/InApp/Wishlist/components/wishlistProduct/styles/stylesWishlistProductCard';
import { putCartProduct } from '@src/services/product/cart/methods/putCartProduct';
import { firstLetterToUppercase } from '@src/utils/firstLetterToUppercase';
import ClickSVG from '@src/assets/svgs/click.svg';
import { useNavigation } from '@react-navigation/native';
import { formatCurrency } from '@src/utils/formatCurrency';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

interface WishlistProductCardType extends ProductObjectType {
  getWishlistProductsAndSet: Function;
}

export default function WishlistProductCard({
  title,
  price,
  uniqueId,
  size,
  productWithColor,
  getWishlistProductsAndSet,
}: WishlistProductCardType) {
  const navigation = useNavigation();

  const realPrice = formatCurrency(price);

  async function onAddCart() {
    await putCartProduct({
      uniqueId,
    });
  }

  async function onRemoveFromWishlist() {
    const response = await putWishlistProduct({
      uniqueId,
      removeFromWishlist: true,
    });

    if (response?.messageSuccess) {
      await getWishlistProductsAndSet();
    }
  }

  function onViewProduct() {
    navigation.navigate('home/product', { uniqueId });
  }

  return (
    <View style={stylesWishlistProductCard.container}>
      <TouchableHighlight
        onPressIn={onViewProduct}
        style={stylesWishlistProductCard.imageContainerRounded}
      >
        <View
          style={[
            stylesWishlistProductCard.imageContainer,
            stylesWishlistProductCard.imageContainerRounded,
          ]}
        >
          <View style={stylesWishlistProductCard.clickSVGContainer}>
            <ClickSVG width={15} height={15} />
          </View>

          {productWithColor?.urlImage != null && (
            <Image
              alt={title}
              width={125}
              height={135}
              source={productWithColor?.urlImage}
              style={stylesWishlistProductCard.image}
            />
          )}
        </View>
      </TouchableHighlight>

      <View style={stylesWishlistProductCard.infoContainer}>
        <TextDefault style={stylesWishlistProductCard.titleText}>{title}</TextDefault>

        <TextDefault style={stylesWishlistProductCard.normalText}>
          Color:
          <TextDefault style={stylesWishlistProductCard.infoText}>
            {` ${firstLetterToUppercase(productWithColor?.color)}`}
          </TextDefault>
        </TextDefault>

        <TextDefault style={stylesWishlistProductCard.normalText}>
          Size:
          <TextDefault
            style={stylesWishlistProductCard.infoText}
          >{` ${size?.toUpperCase()}`}</TextDefault>
        </TextDefault>

        <TextDefault style={stylesWishlistProductCard.normalText}>{realPrice}</TextDefault>

        <View style={stylesWishlistProductCard.infoBtnsContainer}>
          <DefaultButton
            title="Add to cart"
            onPressIn={onAddCart}
            style={stylesWishlistProductCard.addCartBtn}
            textProps={{ style: stylesWishlistProductCard.actionBtnText }}
          />

          <UnderlineTextButton
            title="Remove"
            onPressIn={onRemoveFromWishlist}
            textProps={{ style: stylesWishlistProductCard.actionBtnText }}
          />
        </View>
      </View>
    </View>
  );
}
