import {appColors} from '@src/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesInputPassword = StyleSheet.create({
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: appColors.blue,
    alignSelf: 'flex-end',
    flex: 1,
  },
  passwordRevealBtn: {
    position: 'absolute',
    right: 0,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  textsContainer: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
