import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesWishListButton = StyleSheet.create({
  wishListButton: {
    backgroundColor: appColors.white,
    borderColor: appColors.black,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    height: 42,
  },
  wishListTitle: {
    color: appColors.black,
    textAlign: 'center',
    fontSize: 18,
  },
});
