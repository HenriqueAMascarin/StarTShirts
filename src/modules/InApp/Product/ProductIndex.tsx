import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextDefault from '@src/components/texts/TextDefault';
import TextTitleH1 from '@src/components/texts/TextTitleH1';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { appColors } from '@src/utils/appColors';

export type PropsProductIndex = NativeStackScreenProps<RootStackParamList, 'home/product'>;

async function getInitialProductResponse({ id }: { id: number }) {
    const products = await getProducts({ id });

    const product = products?.[0];

    return product;
}

function SizesProduct() {

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const sizesArray = sizes.map((size) => { return { text: size, isSelected: size === 'XS' }; });

    const [stateSizes, changeStateSizes] = useState(sizesArray);

    function onChangeSize(sizeToBeActive) {
        const newStateSizes = {...stateSizes};

        const isSizeNotActive = newStateSizes.find(() => {
            
        })

        if()
    }

    const MapMemoStateSizes = useMemo(() => {
        return (
            <>
                {stateSizes.map((state) => {

                    const backgroundColor = state.isSelected ? appColors.black : appColors.white;

                    const textColor = state.isSelected ? appColors.white : appColors.black;

                    return (
                        <TouchableOpacity style={{ backgroundColor }} onPressIn={} >
                            <TextDefault style={{ color: textColor }}>{state.text}</TextDefault>
                        </TouchableOpacity>
                    );
                })}
            </>
        );
    }, [stateSizes]);

    return (
        <View>
            <TextDefault>Sizes</TextDefault>

            <View>
                {MapMemoStateSizes}
            </View>
        </View>
    );
}

export default async function ProductIndex({ route }: PropsProductIndex) {
    const { id } = route.params;

    const product = await getInitialProductResponse({ id });


    return (
        <View>
            <View>
                <TextTitleH1>{product.title}</TextTitleH1>
                <TextDefault>{product.price}</TextDefault>
            </View>

            <SizesProduct />
        </View>
    );
}