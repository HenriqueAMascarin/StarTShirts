import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesMenuDrawerModal = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: appColors.white,
    minHeight: '100%',
  },
  touchableBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  exitText: {
    color: appColors.red,
  },
  textMenu: {
    fontSize: 22,
  },
});
