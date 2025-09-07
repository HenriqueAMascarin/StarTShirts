import {appColors} from '@src/utils/appColors';
import {StyleSheet} from 'react-native';

export const stylesGlobal = StyleSheet.create({
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
    backgroundColor: appColors.white,
    color: appColors.black,
  },
  container: {
    alignSelf: 'stretch',
  },
  label: {
    paddingLeft: 5,
    fontSize: 18,
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  error: {
    paddingLeft: 5,
    color: appColors.red,
    alignSelf: 'flex-start',
    flex: 1,
  },
});
