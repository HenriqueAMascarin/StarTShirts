import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesQuantityChanger = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    outlineWidth: 1.2,
    outlineColor: appColors.grayish,
    maxWidth: 74,
    paddingHorizontal: 6,
    marginVertical: 6,
  },
  quantity: {
    fontFamily: 'InterMedium',
  },
  symbol: {
    fontFamily: 'InterBold',
  }
});
