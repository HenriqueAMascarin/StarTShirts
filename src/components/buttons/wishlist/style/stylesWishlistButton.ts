import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesWishlistButton = StyleSheet.create({
  wishlistButton: {
    backgroundColor: appColors.white,
    borderColor: appColors.black,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    height: 42,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  wishlistTitle: {
    color: appColors.black,
    textAlign: 'center',
    fontSize: 18,
  },
});
