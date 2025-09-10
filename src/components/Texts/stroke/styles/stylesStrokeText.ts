import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesStrokeText = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalText: {
    fontSize: 30,
    fontFamily: 'InterBold',
    color: appColors.black,
  },
  text: {
    zIndex: 1,
  },
  strokeText: {
    fontSize: 32,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
