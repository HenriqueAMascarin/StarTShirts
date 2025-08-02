import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { Suspense, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { stylesSlogan } from '@src/modules/InApp/Home/styles/stylesSlogan';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import ProductCard from '@src/modules/InApp/components/tshirt/card/ProductCard';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/MainContainer';
import whiteTShirtImg from '@src/assets/tshirt/images/white_tshirt.webp';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesProductsContent } from '@src/modules/InApp/Home/styles/stylesProductsContent';

function SloganTShirt() {
  return (
    <View style={stylesSlogan.container}>
      <Image style={stylesSlogan.image} source={whiteTShirtImg} />

      <View style={stylesSlogan.textsContainer}>
        <TextDefault style={stylesSlogan.text}>Most</TextDefault>
        <TextDefault style={stylesSlogan.text}>Purchased</TextDefault>
        <TextDefault style={stylesSlogan.text}>T-shirt</TextDefault>
      </View>
    </View>
  );
}

function ProductsContent() {
  const [products, changeProducts] = useState<null | Awaited<ReturnType<typeof getProducts>>>(null);

  (async () => {
    const newProducts = await getProducts({});

    changeProducts(newProducts);
  })();

  return (
    <View style={stylesProductsContent.container}>
      <Suspense fallback={<LoadingScreen />}>
        {products &&
          products.map((product, keyProduct) => {
            return <ProductCard {...product} key={keyProduct} />;
          })}
      </Suspense>
    </View>
  );
}

export default function HomeIndex() {
  return (
    <MainContainer>
      <SloganTShirt />

      <PaddingContainer>
        <ProductsContent />
      </PaddingContainer>
    </MainContainer>
  );
}
