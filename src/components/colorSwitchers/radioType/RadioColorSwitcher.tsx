import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { appColors } from '@src/utils/appColors';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { stylesRadioColorSwitcher } from '@src/components/colorSwitchers/radioType/styles/stylesRadioColorSwitcher';

type StateColorsType = ProductObjectType['colors'];

type SizesProductType = {
  stateColors: StateColorsType;
  changeStateColors: React.Dispatch<React.SetStateAction<StateColorsType>>;
};

const productColors = {
  white: '#FFFFFF',
  red: '#EC6262',
  blue: '#6291EC',
};

export default function RadioColorSwitcher({ stateColors, changeStateColors }: SizesProductType) {
  function onToggleColor(pressedColor: string) {
    const rawColorsArray = [...stateColors];

    const isPressedColorActive = rawColorsArray.some(
      (element) => element.color === pressedColor && element.isSelected,
    );

    if (!isPressedColorActive) {
      for (let index = 0; index < rawColorsArray.length; index++) {
        rawColorsArray[index].isSelected = rawColorsArray[index].color === pressedColor;
      }
    }

    changeStateColors(rawColorsArray);
  }

  return (
    <View style={stylesRadioColorSwitcher.containerBtns}>
      {stateColors.map((element, keyItem) => {
        const circleBackgroundColor = productColors?.[element.color];

        const borderColor = element.isSelected ? appColors.black : appColors.gray;

        function onPressBtn() {
          onToggleColor(element.color);
        }

        return (
          <TouchableOpacity
            style={[stylesRadioColorSwitcher.toggleBtn, { borderColor: borderColor }]}
            onPressIn={onPressBtn}
            key={keyItem}
          >
            <View
              style={[
                { backgroundColor: circleBackgroundColor },
                stylesRadioColorSwitcher.toggleBtnCircle,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
