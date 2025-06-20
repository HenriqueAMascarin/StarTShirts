import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesHeaderIndex = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
  },
  headerContainer: {
    backgroundColor: appColors.black,
    paddingVertical: 10,
  },
  searchInput: {
    borderColor: appColors.white,
    paddingLeft: 30,
    minHeight: 29,
    borderRadius: 10,
  },
  seachInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  flexContainer: {
    display: 'flex',
    gap: 20,
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
    height: 3.2,
    width: 25,
    backgroundColor: appColors.white,
    borderRadius: 20,
  },
});
