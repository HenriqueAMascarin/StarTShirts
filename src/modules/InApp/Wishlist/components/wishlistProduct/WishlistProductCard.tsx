import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React from 'react';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { WishlistProductObjectType } from '@src/services/product/wishlist/types/genericTypes';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import { putWishlistProduct } from '@src/services/product/wishlist/methods/putWishlistProduct';
import { stylesWishlistProductCard } from '@src/modules/InApp/Wishlist/components/wishlistProduct/styles/stylesWishlistProductCard';
import { putCartProduct } from '@src/services/product/cart/methods/putCartProduct';

interface WishlistProductCardType extends WishlistProductObjectType {
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
  const realPrice = '$' + price;

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

        <TextDefault style={stylesWishlistProductCard.infoText}>
          {productWithColor?.color} - {size}
        </TextDefault>

        <TextDefault style={stylesWishlistProductCard.infoText}>{realPrice}</TextDefault>

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
