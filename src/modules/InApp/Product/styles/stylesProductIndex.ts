import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesProductIndex = StyleSheet.create({
  containerImage: {
    backgroundColor: appColors.yellow,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
  },
  image: {
    width: 255,
    height: 265,
  },
  btn3D: {
    position: 'absolute',
    top: 20,
    right: 30,
    backgroundColor: appColors.white,
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: '100%',
    outlineColor: appColors.black,
    outlineWidth: 0.8,
  },
  btn3DText: {
    fontSize: 18,
  },
  infoSection: {
    marginTop: 20,
  },
  titleSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 22,
    fontFamily: 'InterSemiBold',
  },
  flexContainerInfos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
