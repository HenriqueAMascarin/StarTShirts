import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSlogan = StyleSheet.create({
  container: {
    maxHeight: 310,
    width: '100%',
    backgroundColor: appColors.yellow,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    maxWidth: 165,
    maxHeight: 175,
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
