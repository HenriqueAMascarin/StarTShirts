import React from 'react';
import TextDefault from '@src/components/texts/default/TextDefault';
import { TouchableOpacity, View } from 'react-native';
import { appColors } from '@src/utils/appColors';
import { stylesSizesProduct } from '@src/modules/InApp/Product/components/sizesChanger/styles/stylesSizesProduct';

type StateSizesType = {
  text: string;
  isSelected: boolean;
}[];

type SizesProductType = {
  stateSizes: StateSizesType;
  changeStateSizes: React.Dispatch<React.SetStateAction<StateSizesType>>;
};

export default function SizesProduct({ stateSizes, changeStateSizes }: SizesProductType) {
  function onChangeSize(sizeToBeActive: string) {
    const newStateSizes = [...stateSizes];

    const isSizeActive = newStateSizes.some(
      (size) => size.isSelected && size.text === sizeToBeActive,
    );

    if (!isSizeActive) {
      for (let index = 0; index < newStateSizes.length; index++) {
        if (newStateSizes[index].text === sizeToBeActive) {
          newStateSizes[index].isSelected = true;
        } else {
          newStateSizes[index].isSelected = false;
        }
      }

      changeStateSizes(newStateSizes);
    }
  }

  return (
    <View style={stylesSizesProduct.container}>
      <TextDefault style={stylesSizesProduct.textTitle}>Sizes</TextDefault>

      <View style={stylesSizesProduct.containerBtn}>
        {stateSizes.map((state, keySize) => {
          const backgroundColor = state.isSelected ? appColors.black : appColors.white;

          const textColor = state.isSelected ? appColors.white : appColors.black;

          return (
            <TouchableOpacity
              style={[stylesSizesProduct.sizeBtn, { backgroundColor }]}
              onPressIn={() => onChangeSize(state.text)}
              key={keySize}
            >
              <TextDefault style={[stylesSizesProduct.sizeBtnText,{ color: textColor }]}>{state.text}</TextDefault>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
