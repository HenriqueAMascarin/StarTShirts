import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesWishlistProductCard = StyleSheet.create({
  container: {
    maxWidth: 145,
    backgroundColor: appColors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 4,
    outlineWidth: 1.5,
    outlineColor: appColors.black,
    outlineOffset: -1.2,
  },
  imageContainerRounded: {
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
  },
  imageContainer: {
    backgroundColor: appColors.black,
    minWidth: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    marginTop: 8,
    width: 125,
    height: 135,
  },
  infoContainer: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 9,
  },
  addCartBtn: {
    height: 30,
  },
  titleText: {
    fontFamily: 'InterMedium',
    fontSize: 17,
  },
  infoText: {
    fontFamily: 'InterMedium',
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
    right: 6,
    top: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: appColors.white,
    borderRadius: '100%',
  },
});
