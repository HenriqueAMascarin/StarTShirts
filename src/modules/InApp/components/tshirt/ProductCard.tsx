import TextDefault from '@src/components/texts/TextDefault';
import { Image, View } from 'react-native';
import React, { Suspense } from 'react';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import { useNavigation } from '@react-navigation/native';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedColorData from '@src/components/colorSwitchers/hooks/useMemoSelectedColorData';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';

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
      <Suspense fallback={<LoadingScreen />}>
        <View>
          {selectedColorMemoData?.urlImage != null && (
            <Image alt={title} width={100} height={100} source={selectedColorMemoData.urlImage} />
          )}
        </View>

        <View>
          <RadioColorSwitcher stateColors={stateColors} changeStateColors={changeStateColors} />

          <TextDefault>{title}</TextDefault>

          <TextDefault>{realPrice}</TextDefault>

          <ButtonDefault title="Check product" onPressIn={onCheckProduct} />
        </View>
      </Suspense>
    </View>
  );
}
