import { StyleSheet } from 'react-native';

export const stylesCartProductsContent = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 30,
  },
  containerPrice: {
    padding: 4,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
