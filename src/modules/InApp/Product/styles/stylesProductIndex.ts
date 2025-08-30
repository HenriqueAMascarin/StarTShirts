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
    fontFamily: 'InterBold',
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
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  colorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  colorTitle: {
    fontSize: 18,
  },
  colorTitleCurrent: {
    color: appColors.grayish,
    fontSize: 18,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  buttonsStyles: {
    maxWidth: 260,
    width: '100%',
  },
  detailsContainer: {
    backgroundColor: appColors.whitish,
    paddingTop: 15,
    paddingBottom: 45,
    marginTop: 55,
  },
  detailsTitle: {
    fontSize: 24,
    fontFamily: 'InterSemiBold',
  },
  detailsInfo: {
    marginBottom: 2,
  },
  detailsBulletText: {
    fontSize: 20,
  },
});
