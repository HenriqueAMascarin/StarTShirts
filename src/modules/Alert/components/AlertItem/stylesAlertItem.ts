import {appColors} from '@src/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesAlertItem = StyleSheet.create({
  defaultAlertContainer: {
    backgroundColor: appColors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 340,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorContainer: {
    backgroundColor: appColors.red,
  },
  successContainer: {
    backgroundColor: appColors.green,
  },
  defaultAlertText: {
    fontSize: 16,
    color: appColors.white,
  },
});
