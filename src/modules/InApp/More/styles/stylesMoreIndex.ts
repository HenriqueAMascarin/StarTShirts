import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesMoreIndex = StyleSheet.create({
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    marginBottom: 10,
  },
  firstName: {
    fontFamily: 'InterSemiBold',
  },
  accountBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  accountText: {
    color: appColors.grayish,
  },
  arrowIcon: {
    marginTop: 4,
  },
});
