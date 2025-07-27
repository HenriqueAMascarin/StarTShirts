import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { appColors } from '@src/utils/appColors';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type StateColorsType = ProductObjectType['colors'];

type SizesProductType = {
  stateColors: StateColorsType;
  changeStateColors: React.Dispatch<React.SetStateAction<StateColorsType>>;
};

export default function RadioColorSwitcher({ stateColors, changeStateColors }: SizesProductType) {
  function onToggleColor(pressedColor: string) {
    const rawColorsObject = { ...stateColors };

    const isPressedColorActive = rawColorsObject.some(
      (element) => element.color === pressedColor && element.isSelected
    );

    if (!isPressedColorActive) {
      for (let index = 0; index < rawColorsObject.length; index++) {
        rawColorsObject[index].isSelected = rawColorsObject[index].color === pressedColor;
      }
    }

    changeStateColors(rawColorsObject);
  }

  return (
    <View>
      {stateColors.map((element, keyItem) => {
        const circleBackgroundColor = element.color;

        const borderColor = element.isSelected ? appColors.black : appColors.gray;

        function onPressBtn() {
          onToggleColor(element.color);
        }

        return (
          <TouchableOpacity
            style={{ borderColor: borderColor, borderWidth: 2 }}
            onPressIn={onPressBtn}
            key={keyItem}
          >
            <View style={{ backgroundColor: circleBackgroundColor }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
