import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { WishlistProductObjectType } from '@src/services/product/wishlist/types/genericTypes';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import { putWishlistProduct } from '@src/services/product/wishlist/methods/putWishlistProduct';
import { stylesWishlistProductCard } from '@src/modules/InApp/Wishlist/components/wishlistProduct/styles/stylesWishlistProductCard';

interface CartProductCardType extends WishlistProductObjectType {
  getCartProductsAndSetToState: Function;
}

export default function CartProductCard({
  title,
  price,
  id,
  colors,
  getCartProductsAndSetToState,
}: CartProductCardType) {
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
      await getCartProductsAndSetToState();
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
