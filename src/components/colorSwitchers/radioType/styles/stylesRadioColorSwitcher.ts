import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesRadioColorSwitcher = StyleSheet.create({
  containerBtns: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

    gap: 5,
  },
  toggleBtn: {
    width: 25,
    height: 25,
    padding: 1,
    borderRadius: 25,
    borderWidth: 2,
  },
  toggleBtnCircle: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: appColors.black,
  },
});
