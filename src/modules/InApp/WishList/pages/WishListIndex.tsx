import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import ProductCard from '@src/modules/InApp/components/tshirt/card/ProductCard';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import { stylesProductsContent } from '@src/modules/InApp/Home/styles/stylesProductsContent';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import { getWishListProducts } from '@src/services/product/wishList/methods/getWishListProducts';

function ProductsContent() {
  const [productsWishList, changeProductsWishList] = useState<null | Awaited<ReturnType<typeof getProducts>>>(null);

  async function getInitialProducts() {
    const newProductsWishList = await getWishListProducts({});

    changeProductsWishList(newProductsWishList);
  }

  useEffect(() => {
    getInitialProducts();
  }, []);

  return (
    <View style={stylesProductsContent.container}>
      {productsWishList ? (
        productsWishList.map((product, keyProduct) => {
          return <ProductCard {...product} key={keyProduct} />;
        })
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}

export default function WishListIndex() {
  return (
    <MainContainer>
      <PaddingContainer>
        <TextTitleH2>Wish list</TextTitleH2>

        <ProductsContent />
      </PaddingContainer>
    </MainContainer>
  );
}
