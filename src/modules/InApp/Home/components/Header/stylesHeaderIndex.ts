import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesHeaderIndex = StyleSheet.create({
  container: {
    backgroundColor: appColors.black,
  },
  flexContainer: {
    display: 'flex',
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padsHamburguer: {
    height: 2,
    width: 5,
    backgroundColor: appColors.white,
    borderRadius: 10,
  },
});
