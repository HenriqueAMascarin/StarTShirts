import { StyleSheet } from 'react-native';

export const stylesMainContainer = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  childrenContainer: {
    flexGrow: 1,
  }
});
