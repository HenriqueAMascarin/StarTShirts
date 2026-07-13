import TextDefault from '@src/components/texts/default/TextDefault';
import { Image, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { stylesProductCard } from '@src/modules/InApp/components/tshirt/card/styles/stylesProductCard';
import DefaultButton from '@src/components/buttons/default/DefaultButton';

export default function ProductCard(product: ProductObjectType) {
  const [stateProductData, changeStateProductData] = useState(product);

  const navigation = useNavigation();

  const realPrice = '$' + productData.price;

  function onCheckProduct() {
    navigation.navigate('home/product', { uniqueId: stateProductData.uniqueId });
  }

  return (
    <View style={stylesProductCard.container}>
      <View style={stylesProductCard.imageContainer}>
        {stateProductData.productWithColor?.urlImage != null && (
          <Image
            alt={stateProductData.title}
            width={125}
            height={135}
            source={stateProductData.productWithColor?.urlImage}
            style={stylesProductCard.image}
          />
        )}
      </View>

      <View style={stylesProductCard.infoContainer}>
        <TextDefault style={stylesProductCard.titleText}>{stateProductData.title}</TextDefault>

        <TextDefault style={stylesProductCard.priceText}>{realPrice}</TextDefault>

        <RadioColorSwitcher stateProductData={stateProductData} changeStateProductData={changeStateProductData} />

        <DefaultButton
          title="Check product"
          onPressIn={onCheckProduct}
          style={stylesProductCard.infoBtn}
          textProps={{ style: stylesProductCard.infoBtnText }}
          testID='productCardCheckBtnTestId'
        />
      </View>
    </View>
  );
}
