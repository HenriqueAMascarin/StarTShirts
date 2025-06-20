import TextDefault from '@src/components/texts/TextDefault';
import { Image, View } from 'react-native';
import React from 'react';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import { useNavigation } from '@react-navigation/native';

export default function TShirtCard({ title, price, colors, id }) {

    const navigation = useNavigation();

    const realPrice = '$' + price;

    function onCheckProduct() {
        navigation.navigate('home/product', { id });
    }

    return (
        <View>
            <View>
                <Image width={300} height={200} alt={title} />
            </View>

            <View>


                <TextDefault>
                    {title}
                </TextDefault>

                <TextDefault>
                    {realPrice}
                </TextDefault>

                <ButtonDefault title="Check product" />
            </View>
        </View>
    )
}