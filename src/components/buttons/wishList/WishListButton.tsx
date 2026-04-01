import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import React, { useMemo } from 'react';
import { stylesWishListButton } from '@src/components/buttons/wishList/style/stylesWishListButton';
import WishListSVG from '@src/assets/svgs/wishList.svg';
import { appColors } from '@src/utils/appColors';

type buttonTypes = TouchableOpacityProps & {
  title?: string;
  textProps?: TextProps;
  isWishlisted?: boolean;
};

export default function WishListButton(buttonProps: buttonTypes) {
  const wishListSVGColor = useMemo(
    () => (buttonProps?.isWishlisted ? appColors.red : appColors.grayish),
    [buttonProps?.isWishlisted],
  );

  return (
    <TouchableOpacity
      {...buttonProps}
      style={[stylesWishListButton.wishListButton, buttonProps?.style]}
    >
      <WishListSVG width={28.24} height={24.47} color={wishListSVGColor} />

      <TextDefault style={[stylesWishListButton.wishListTitle, buttonProps.textProps?.style]}>
        {buttonProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}
