import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesNavigationTabBar = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: appColors.white,
    borderColor: appColors.softGray,
    borderTopWidth: 1,
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '100%',
  },
});
