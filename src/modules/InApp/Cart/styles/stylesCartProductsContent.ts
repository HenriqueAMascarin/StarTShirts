import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesCartProductsContent = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 30,
  },
  containerProducts: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  containerPrice: {
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: appColors.softWhite,
    outlineColor: appColors.black,
    outlineWidth: 1.5,
    marginBottom: 30,
  },
  containerPriceText: {
    fontFamily: 'InterBold',
    fontSize: 18,
  },
  checkoutBtn: {
    fontFamily: 'InterBold',
  }
});
