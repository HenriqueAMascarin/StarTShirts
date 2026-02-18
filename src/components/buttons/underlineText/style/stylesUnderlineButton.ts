import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesUnderlineButton = StyleSheet.create({
  defaultButton: {
    borderRadius: 18,
    justifyContent: 'center',
    height: 42,
  },
  title: {
    color: appColors.black,
    textAlign: 'center',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
