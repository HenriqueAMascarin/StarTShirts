import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import { getWishlistProducts } from '@src/services/product/wishlist/methods/getWishlistProducts';
import ManagementPagesContainerWithTitle from '@src/modules/InApp/components/containers/ManagementPagesWithTitle/ManagementPagesContainerWithTitle';
import ListIsEmptyMessages from '@src/modules/InApp/components/emptyList/ListIsEmptyMessages';
import { stylesCartProductsContent } from '@src/modules/InApp/Cart/styles/stylesCartProductsContent';
import CartProductCard from '@src/modules/InApp/Cart/components/wishlistProduct/CartProductCard';

function ProductsCartContent() {
  const [cartProducts, changeCartProducts] = useState<null | Awaited<
    ReturnType<typeof getWishlistProducts>
  >>(null);

  async function getCartProductsAndSetToState() {
    const newProductsWishlist = await getWishlistProducts({});

    changeCartProducts(newProductsWishlist);
  }

  useEffect(() => {
    getCartProductsAndSetToState();
  }, []);

  const hasSomeProduct = useMemo(
    () => cartProducts != null && cartProducts?.length > 0,
    [cartProducts],
  );

  return (
    <View style={stylesCartProductsContent.container}>
      {hasSomeProduct ? (
        <View>
          {cartProducts?.map((cartProduct, cartKeyProduct) => {
            return (
              <CartProductCard
                {...cartProduct}
                key={cartKeyProduct}
                getCartProductsAndSetToState={getCartProductsAndSetToState}
              />
            );
          })}
        </View>
      ) : cartProducts != null ? (
        <ListIsEmptyMessages title='Your cart is empty.' subtitle='Add items to your cart by shopping the site.'/>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}

export default function CartIndex() {
  return (
    <MainContainer>
      <PaddingContainer>
        <ManagementPagesContainerWithTitle title={'Your cart'}>
          <ProductsCartContent />
        </ManagementPagesContainerWithTitle>
      </PaddingContainer>
    </MainContainer>
  );
}
