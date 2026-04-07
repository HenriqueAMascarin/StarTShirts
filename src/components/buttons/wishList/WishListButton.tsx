import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import React, { useMemo } from 'react';
import { stylesWishlistButton } from '@src/components/buttons/wishlist/style/stylesWishlistButton';
import WishlistSVG from '@src/assets/svgs/wishlist.svg';
import { appColors } from '@src/utils/appColors';

type buttonTypes = TouchableOpacityProps & {
  textProps?: TextProps;
  isWishlisted: boolean;
};

export default function WishlistButton(buttonProps: buttonTypes) {
  const wishlistSVGColor = useMemo(
    () => (buttonProps?.isWishlisted ? appColors.red : appColors.grayish),
    [buttonProps?.isWishlisted],
  );

  const titleWishlistBtn = useMemo(
    () => (buttonProps?.isWishlisted ? 'Remove of wishlist' : 'Add to wishlist'),
    [buttonProps?.isWishlisted],
  );

  return (
    <TouchableOpacity
      {...buttonProps}
      style={[stylesWishlistButton.wishlistButton, buttonProps?.style]}
    >
      <WishlistSVG width={28.24} height={24.47} fill={wishlistSVGColor} />

      <TextDefault style={[stylesWishlistButton.wishlistTitle, buttonProps.textProps?.style]}>
        {titleWishlistBtn}
      </TextDefault>
    </TouchableOpacity>
  );
}
