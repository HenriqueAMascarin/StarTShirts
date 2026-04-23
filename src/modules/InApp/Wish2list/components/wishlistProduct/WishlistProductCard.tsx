import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { WishlistProductObjectType } from '@src/services/wishlist/types/genericTypes';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import { putWishlistProduct } from '@src/services/wishlist/methods/putWishlistProducts';
import { stylesWishlistProductCard } from '@src/modules/InApp/Wishlist/components/wishlistProduct/styles/stylesWishlistProductCard';

interface WishlistProductCardType extends WishlistProductObjectType {
  getWishlistProductsAndSet: Function;
}

export default function WishlistProductCard({
  title,
  price,
  id,
  colors,
  getWishlistProductsAndSet,
}: WishlistProductCardType) {
  const navigation = useNavigation();

  const realPrice = '$' + price;

  function onAddCart() {
    navigation.navigate('home/product', { id });
  }

  async function onRemoveFromWishlist() {
    const response = await putWishlistProduct({
      id,
      removeFromWishlist: true,
    });

    if (response?.messageSuccess) {
      await getWishlistProductsAndSet();
    }
  }

  const productFirstUrlImage = useMemo(() => colors?.[0]?.urlImage, [colors]);

  return (
    <View style={stylesWishlistProductCard.container}>
      <View style={stylesWishlistProductCard.imageContainer}>
        {productFirstUrlImage != null && (
          <Image
            alt={title}
            width={125}
            height={135}
            source={productFirstUrlImage}
            style={stylesWishlistProductCard.image}
          />
        )}
      </View>

      <View style={stylesWishlistProductCard.infoContainer}>
        <TextDefault style={stylesWishlistProductCard.titleText}>{title}</TextDefault>

        <TextDefault style={stylesWishlistProductCard.priceText}>{realPrice}</TextDefault>

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
