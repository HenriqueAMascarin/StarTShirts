import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { Suspense, useState } from 'react';
import { Image, View } from 'react-native';
import { stylesSlogan } from '@src/modules/InApp/Home/styles/stylesSlogan';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import ProductCard from '@src/modules/InApp/components/tshirt/card/ProductCard';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import whiteTShirtImg from '@src/assets/products/classicTShirt/images/white_tshirt.webp';
import { stylesProductsContent } from '@src/modules/InApp/Home/styles/stylesProductsContent';
import SloganSVGText from '@src/assets/svgs/sloganText.svg';

function SloganTShirt() {
  return (
    <View style={stylesSlogan.container}>
      <Image style={stylesSlogan.image} source={whiteTShirtImg} width={155} height={165}/>

      <SloganSVGText accessibilityLabel="Most purchased t-shirt" width="204" height="109"/>
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
