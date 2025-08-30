import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesDefaultButton = StyleSheet.create({
  defaultButton: {
    backgroundColor: appColors.black,
    borderRadius: 18,
    justifyContent: 'center',
    height: 42,
  },
  title: {
    color: appColors.white,
    textAlign: 'center',
    fontSize: 18,
  },
});
