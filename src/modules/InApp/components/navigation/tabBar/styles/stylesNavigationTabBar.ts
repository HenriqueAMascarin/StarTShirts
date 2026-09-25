import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesNavigationTabBar = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: appColors.white,
    maxHeight: 80,
    borderColor: appColors.softGray,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '100%'
  }
});
