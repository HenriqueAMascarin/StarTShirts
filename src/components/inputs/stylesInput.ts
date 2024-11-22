import {appColors} from '@App/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesInput = StyleSheet.create({
  defaultInput: {
    borderWidth: 1,
    borderColor: appColors.black,
    borderRadius: 12,
    minHeight: 42,
    fontFamily: 'InterMedium',
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    paddingLeft: 5,
    fontSize: 18,
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textsContainer: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  error: {
    paddingLeft: 5,
    color: appColors.red,
    alignSelf: 'flex-start',
    flex: 1,
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
});
