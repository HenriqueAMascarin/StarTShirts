import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSlogan = StyleSheet.create({
  container: {
    maxHeight: 310,
    width: '100%',
    backgroundColor: appColors.yellow,
    paddingVertical: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    maxWidth: 155,
    maxHeight: 165,
  },
  textsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  text: {
    textTransform: 'uppercase',
    color: appColors.black,
  },
});
