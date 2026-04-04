import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import { stylesProductsContent } from '@src/modules/InApp/Home/styles/stylesProductsContent';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import { getWishlistProducts } from '@src/services/wishlist/methods/getWishlistProducts';
import WishlistProductCard from '@src/modules/InApp/Wishlist/components/wishlistProduct/WishlistProductCard';

function ProductsContent() {
  const [productsWishlist, changeProductsWishlist] = useState<null | Awaited<ReturnType<typeof getProducts>>>(null);

  async function getInitialProducts() {
    const newProductsWishlist = await getWishlistProducts({});

    changeProductsWishlist(newProductsWishlist);
  }

  useEffect(() => {
    getInitialProducts();
  }, []);

  return (
    <View style={stylesProductsContent.container}>
      {productsWishlist ? (
        productsWishlist.map((product, keyProduct) => {
          return <WishlistProductCard {...product} key={keyProduct} />;
        })
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
        <TextTitleH2>Wishlist</TextTitleH2>

        <ProductsContent />
      </PaddingContainer>
    </MainContainer>
  );
}
