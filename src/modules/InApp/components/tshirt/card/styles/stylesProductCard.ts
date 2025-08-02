import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesProductCard = StyleSheet.create({
  container: {
    maxWidth: 145,
    backgroundColor: appColors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    outlineWidth: 1.5,
    outlineColor: appColors.black,
    outlineOffset: -1.2,
  },
  imageContainer: {
    backgroundColor: appColors.black,
    minWidth: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 125,
    height: 135,
  },
  infoContainer: {
    minWidth: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  infoBtn: {
    marginTop: 20,
    height: 30,
  },
  infoBtnText: {
    fontSize: 16,
  },
});
