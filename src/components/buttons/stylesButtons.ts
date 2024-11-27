import {appColors} from '@src/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesButtons = StyleSheet.create({
  defaultButton: {
    backgroundColor: appColors.black,
    borderRadius: 18,
    justifyContent: "center",
    height: 42,
  },
  title: {
    color: appColors.white,
    textAlign: 'center',
    fontSize: 18,
  },
  borderButton: {
    backgroundColor: appColors.white,
    borderColor: appColors.black,
    borderWidth: 1,
  },
  borderTitle: {
    color: appColors.black,
  },
});
