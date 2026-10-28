import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesMenuItems = StyleSheet.create({
  containerMenus: {
    display: 'flex',
    marginTop: 10,
    borderTopColor: appColors.grayish,
    borderTopWidth: 1,
  },
  menuBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  textMenuBtn: {
    fontFamily: 'InterMedium',
    fontSize: 18,
  },
  signOutText: {
    color: appColors.red
  }
});
