import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesRadioColorSwitcher = StyleSheet.create({
  containerBtns: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  toggleBtn: {
    width: 23,
    height: 23,
    padding: 1.8,
    borderRadius: 23,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleBtnCircle: {
    flex: 1,
    borderRadius: 23,
    borderWidth: 1,
    width: '100%',
    borderColor: appColors.black,
  },
});
