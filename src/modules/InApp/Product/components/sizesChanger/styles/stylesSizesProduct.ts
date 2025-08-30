import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSizesProduct = StyleSheet.create({
  container: {
    flexGrow: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  textTitle: {
    fontSize: 18,
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  sizeBtn: {
    borderColor: appColors.black,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 26,
    paddingHorizontal: 4,
  },
  sizeBtnText: {
    marginHorizontal: 'auto',
  },
});
