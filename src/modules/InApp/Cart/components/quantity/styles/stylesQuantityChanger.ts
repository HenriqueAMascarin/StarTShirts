import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesQuantityChanger = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
    outlineWidth: 1.5,
    outlineColor: appColors.grayish,
    outlineOffset: -1.2,
    padding: 1,
  },
});
