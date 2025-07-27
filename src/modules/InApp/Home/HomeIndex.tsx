import PaddingContainer from '@src/components/containers/PaddingContainer';
import TextDefault from '@src/components/texts/TextDefault';
import React, { Suspense, useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { stylesSlogan } from '@src/modules/InApp/Home/styles/stylesSlogan';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import ProductCard from '@src/modules/InApp/components/tshirt/ProductCard';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/MainContainer';

function SloganTShirt() {

    return (
        <View style={stylesSlogan.container}>
            <Image style={stylesSlogan.image} source={require('@src/assets/tshirt/images/white_tshirt.webp')} />

            <TextDefault style={stylesSlogan.text}>Most purchased t-shirt</TextDefault>
        </View>
    );
}

function ProductsContent() {

    const [products, changeProducts] = useState<null | Awaited<ReturnType<typeof getProducts>>>(null);

    useEffect(() => {
        (async () => {
            const newProducts = await getProducts({});

            changeProducts(newProducts);
        })();
    }, []);

    return (
        <View>
            <Suspense fallback={<LoadingScreen />}>
                {products && products.map((product, keyProduct) => {
                    return (
                        <ProductCard {...product} key={keyProduct} />
                    );
                })}
            </Suspense>
        </View>
    );
}

export default function HomeIndex() {

    return (
        <MainContainer>
            <ScrollView>
                <SloganTShirt />

                <PaddingContainer>
                    <ProductsContent />
                </PaddingContainer>

            </ScrollView>
        </MainContainer>
    );
}
