import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { WishlistProductObjectType } from '@src/services/product/wishlist/types/genericTypes';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import { putWishlistProduct } from '@src/services/product/wishlist/methods/putWishlistProduct';
import { stylesWishlistProductCard } from '@src/modules/InApp/Wishlist/components/wishlistProduct/styles/stylesWishlistProductCard';
import { putCartProduct } from '@src/services/product/cart/methods/putCartProduct';

interface CartProductCardType extends WishlistProductObjectType {
  getCartProductsAndSetToState: Function;
}

export default function CartProductCard({
  title,
  price,
  uniqueId,
  productWithColor,
  getCartProductsAndSetToState,
}: CartProductCardType) {
  const navigation = useNavigation();

  const realPrice = '$' + price;

  async function onAddCart() {
    const response = await putCartProduct({
      uniqueId,
    });

    if (response?.messageSuccess) {
      await getCartProductsAndSetToState();
    }
  }

  async function onRemoveFromWishlist() {
    const response = await putCartProduct({
      uniqueId,
      removeFromCart: true,
    });

    if (response?.messageSuccess) {
      await getCartProductsAndSetToState();
    }
  }

  return (
    <View style={stylesWishlistProductCard.container}>
      <View style={stylesWishlistProductCard.imageContainer}>
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

      <View style={stylesWishlistProductCard.infoContainer}>
        <TextDefault style={stylesWishlistProductCard.titleText}>{title}</TextDefault>

        <TextDefault style={stylesWishlistProductCard.titleText}>Color: {title}</TextDefault>

        <TextDefault style={stylesWishlistProductCard.titleText}>Size: {title}</TextDefault>

        <TextDefault style={stylesWishlistProductCard.titleText}>Quantity: {title}</TextDefault>
      </View>

      <View style={stylesWishlistProductCard.infoContainer}>
        <TextDefault style={stylesWishlistProductCard.priceText}>{realPrice}</TextDefault>
      </View>
    </View>
  );
}
