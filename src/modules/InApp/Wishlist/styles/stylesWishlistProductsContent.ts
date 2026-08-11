import { StyleSheet } from 'react-native';

export const stylesWishlistProductsContent = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 30,
  },
  productsContainer: {
    flex: 1,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
  },
});
