import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesSlogan = StyleSheet.create({
  container: {
    marginTop: 0,
    maxHeight: 310,
    width: '100%',
    backgroundColor: appColors.yellow,
    paddingVertical: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 160,
    position: 'relative',
  },
  text: {
    textShadowColor: appColors.white,

    textShadowRadius: 10,
    textTransform: 'uppercase',
    color: appColors.black,
  },
});
