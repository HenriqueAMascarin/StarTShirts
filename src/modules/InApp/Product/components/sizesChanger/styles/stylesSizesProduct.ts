import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSizesProduct = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  textTitle: {
    fontSize: 18,
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeBtn: {
    borderColor: appColors.black,
    borderRadius: 8,
    borderWidth: 1,
  },
});
