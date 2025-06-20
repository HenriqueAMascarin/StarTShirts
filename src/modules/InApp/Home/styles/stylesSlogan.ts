import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSlogan = StyleSheet.create({
  container: {
    flex: 1,
    height: 210,
    width: '100%',
    backgroundColor: appColors.yellow,
    paddingVertical: 30,
  },
  text: {
    textShadowColor: appColors.black,
    textShadowRadius: 20,
    textTransform: 'uppercase',
  },
});
