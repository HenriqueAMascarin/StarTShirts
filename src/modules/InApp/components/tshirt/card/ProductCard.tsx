import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedColorData from '@src/components/colorSwitchers/hooks/useMemoSelectedColorData';
import { stylesProductCard } from '@src/modules/InApp/components/tshirt/card/styles/stylesProductCard';
import DefaultButton from '@src/components/buttons/default/DefaultButton';

export default function ProductCard({ title, price, colors, id }: ProductObjectType) {
  const navigation = useNavigation();

  const realPrice = '$' + price;

  function onCheckProduct() {
    navigation.navigate('home/product', { id });
  }

  const { stateColors, changeStateColors } = useColors({ colors });

  const { selectedColorMemoData } = useMemoSelectedColorData({ stateColors });

  return (
    <View style={stylesProductCard.container}>
      <View style={stylesProductCard.imageContainer}>
        {selectedColorMemoData?.urlImage != null && (
          <Image
            alt={title}
            width={125}
            height={135}
            source={selectedColorMemoData.urlImage}
            style={stylesProductCard.image}
          />
        )}
      </View>

      <View style={stylesProductCard.infoContainer}>
        <RadioColorSwitcher stateColors={stateColors} changeStateColors={changeStateColors} />

        <TextDefault>{title}</TextDefault>

        <TextDefault>{realPrice}</TextDefault>

        <DefaultButton
          title="Check product"
          onPressIn={onCheckProduct}
          style={stylesProductCard.infoBtn}
          textProps={{ style: stylesProductCard.infoBtnText }}
        />
      </View>
    </View>
  );
}
