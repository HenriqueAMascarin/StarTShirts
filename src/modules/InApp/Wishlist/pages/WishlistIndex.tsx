import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import { getWishlistProducts } from '@src/services/wishlist/methods/getWishlistProducts';
import WishlistProductCard from '@src/modules/InApp/Wishlist/components/wishlistProduct/WishlistProductCard';
import { stylesWishlistProductsContent } from '@src/modules/InApp/Wishlist/styles/stylesWishlistProductsContent';
import ManagementPagesContainerWithTitle from '@src/modules/InApp/components/containers/ManagementPagesWithTitle/ManagementPagesContainerWithTitle';
import ListIsEmptyMessages from '@src/modules/InApp/components/emptyList/ListIsEmptyMessages';

function ProductsContent() {
  const [productsWishlist, changeProductsWishlist] = useState<null | Awaited<
    ReturnType<typeof getWishlistProducts>
  >>(null);

  async function getWishlistProductsAndSetToState() {
    const newProductsWishlist = await getWishlistProducts({});

    changeProductsWishlist(newProductsWishlist);
  }

  useEffect(() => {
    getWishlistProductsAndSetToState();
  }, []);

  return (
    <View style={stylesWishlistProductsContent.container}>
      {productsWishlist != null && productsWishlist?.length > 0 ? (
        productsWishlist?.map((wishlistProduct, wishlistKeyProduct) => {
          return <WishlistProductCard {...wishlistProduct} key={wishlistKeyProduct} getWishlistProductsAndSet={getWishlistProductsAndSetToState}/>;
        })
      ) : productsWishlist != null ? (
        <ListIsEmptyMessages title='Your list is empty.' subtitle='Add items to your list by shopping the site.'/>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}

export default function WishlistIndex() {
  return (
    <MainContainer>
      <PaddingContainer>
        <ManagementPagesContainerWithTitle title={'Wishlist'}>
          <ProductsContent />
        </ManagementPagesContainerWithTitle>
      </PaddingContainer>
    </MainContainer>
  );
}
