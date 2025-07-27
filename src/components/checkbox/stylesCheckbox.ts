import {appColors} from '@src/utils/appColors';
import {StyleSheet} from 'react-native';

export const stylesCheckbox = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: appColors.black,
    borderWidth: 1,
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  label: {
    color: appColors.black,
    fontSize: 16,
  },
  activeContainerCheckbox: {
    backgroundColor: appColors.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
