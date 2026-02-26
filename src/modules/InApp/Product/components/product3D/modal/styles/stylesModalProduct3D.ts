import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesModalProduct3D = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  customModalContainer: {
    backgroundColor: appColors.yellow,
  },
});
