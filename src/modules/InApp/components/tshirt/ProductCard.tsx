import TextDefault from '@src/components/texts/TextDefault';
import { Image, View } from 'react-native';
import React from 'react';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import { useNavigation } from '@react-navigation/native';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedColorData from '@src/components/colorSwitchers/hooks/useMemoSelectedColorData';

export default function ProductCard({ title, price, colors, id }: ProductObjectType) {

    const navigation = useNavigation();

    const realPrice = '$' + price;

    function onCheckProduct() {
        navigation.navigate('home/product', { id });
    }

    const { stateColors, changeStateColors } = useColors({ colors });

    const { selectedColorMemoData } = useMemoSelectedColorData({ stateColors });

    return (
        <View>
            <View>
                {/* src={require(selectedColorMemoData?.urlImage)} */}
                <Image width={300} height={200} alt={title} />
            </View>

            <View>
                <RadioColorSwitcher stateColors={stateColors} changeStateColors={changeStateColors} />

                <TextDefault>
                    {title}
                </TextDefault>

                <TextDefault>
                    {realPrice}
                </TextDefault>

                <ButtonDefault title="Check product" onPressIn={onCheckProduct} />
            </View>
        </View>
    );
}
