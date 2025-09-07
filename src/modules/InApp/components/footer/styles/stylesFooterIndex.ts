import { appColors } from '@src/utils/appColors';
import { StyleSheet } from 'react-native';

export const stylesFooterIndex = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    maxHeight: 300,
    backgroundColor: appColors.black,
    paddingVertical: 30,
    marginTop: 'auto',
  },
  logoContainer: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: appColors.white,
    fontSize: 30,
    maxWidth: 150,
    textTransform: 'uppercase',
    fontFamily: 'InterBold',
  },
});
