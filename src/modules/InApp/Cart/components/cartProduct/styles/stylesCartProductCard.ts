import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesCartProductCard = StyleSheet.create({
  borderVertical: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColors.gray,
  },
  container: {
    backgroundColor: appColors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 15,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 18,
  },
  imageContainerRounded: {
    borderRadius: 4,
  },
  imageContainer: {
    backgroundColor: appColors.yellow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    paddingTop: 8,
    marginTop: 4,
  },
  image: {
    width: 85,
    height: 95,
  },
  realPriceContainer: {
    marginLeft: 'auto',
  },
  addCartBtn: {
    height: 30,
  },
  normalText: {
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
  infoText: {
    fontFamily: 'InterMedium',
    color: appColors.grayish,
    fontSize: 16,
  },
  priceText: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
  },
  infoBtnsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 4,
    marginTop: 20,
  },
  actionBtnText: {
    fontSize: 16,
  },
  clickSVGContainer: {
    position: 'absolute',
    right: 3,
    top: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: appColors.white,
    borderRadius: '100%',
    outlineColor: appColors.black,
    outlineWidth: 0.9,
  },
});
