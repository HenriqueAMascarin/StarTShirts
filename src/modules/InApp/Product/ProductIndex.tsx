import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextDefault from '@src/components/texts/TextDefault';
import TextTitleH1 from '@src/components/texts/TextTitleH1';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { TouchableOpacity, View, Image } from 'react-native';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import SizesProduct from '@src/modules/InApp/Product/components/sizesChanger/SizesProduct';
import useSizes from '@src/modules/InApp/Product/components/sizesChanger/hooks/useSizes';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedImageColor from '@src/components/colorSwitchers/hooks/useMemoSelectedImageColor';

export type PropsProductIndex = NativeStackScreenProps<RootStackParamList, 'home/product'>;

async function getInitialProductResponse({ id }: { id: number }) {
    const products = await getProducts({ id });

    const product = products?.[0];

    return product;
}

export default async function ProductIndex({ route }: PropsProductIndex) {
    const { id } = route.params;

    const product = await getInitialProductResponse({ id });

    const { stateSizes, changeStateSizes } = useSizes();

    const { stateColors, changeStateColors } = useColors({ colors: product.colors });

    const { selectedImageColorMemo } = useMemoSelectedImageColor({ stateColors });

    return (
        <View>
            <View>
                <TouchableOpacity><TextDefault>3D</TextDefault></TouchableOpacity>

                <Image width={300} height={200} alt={product.title} src={require(selectedImageColorMemo)} />
            </View>

            <View>
                <TextTitleH1>{product.title}</TextTitleH1>
                <TextDefault>{product.price}</TextDefault>
            </View>

            <SizesProduct stateSizes={stateSizes} changeStateSizes={changeStateSizes} />

            <View>
                <RadioColorSwitcher stateColors={stateColors} changeStateColors={changeStateColors} />
            </View>

            <View>
                <ButtonDefault title="Purchase" />

                <ButtonDefault title="Add to Wish List" />
            </View>

            <View>
                <TextDefault>Details & care</TextDefault>

                <TextDefault>{product.details.info}</TextDefault>

                <View>
                    {product.details.list.map((detail) => {
                        return (
                            <TextDefault>
                                {`\u2022 ${detail}`}
                            </TextDefault>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}
