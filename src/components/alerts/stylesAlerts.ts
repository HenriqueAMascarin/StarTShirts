import {appColors} from '@src/utils/styleVariables';
import {StyleSheet} from 'react-native';

export const stylesAlerts = StyleSheet.create({
  defaultAlertContainer: {
    backgroundColor: appColors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 340,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    alignSelf: 'center',
  },
  errorContainer: {
    backgroundColor: appColors.red,
  },
  successContainer: {
    backgroundColor: appColors.green,
  },
  defaultAlertText: {
    fontSize: 16,
    color: appColors.white
  }
});
