import { StyleSheet } from 'react-native';

export const stylesNavigationItems = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 15,
    height: 30,
    width: 54,
  },
});
