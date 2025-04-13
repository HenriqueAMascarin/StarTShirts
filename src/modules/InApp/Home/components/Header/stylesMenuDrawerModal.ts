import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesMenuDrawerModal = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  touchableBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  exitText: {
    color: appColors.red,
  },
});
