import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesHeaderIndex = StyleSheet.create({
  container: {
    backgroundColor: appColors.black,
    maxHeight: 50,
  },
  searchInput: {
    borderColor: appColors.white,
    paddingLeft: 30,
  },
  seachInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  flexContainer: {
    display: 'flex',
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexHamburguer: {
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
  },
  padsHamburguer: {
    height: 3,
    width: 26,
    backgroundColor: appColors.white,
    borderRadius: 10,
  },
});
