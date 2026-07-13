import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { appColors } from '@src/utils/appColors';
import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { stylesRadioColorSwitcher } from '@src/components/colorSwitchers/radioType/styles/stylesRadioColorSwitcher';

type typeProduct = {
  stateProductData: ProductObjectType;
  changeStateProductData: React.Dispatch<React.SetStateAction<ProductObjectType>>;
};

const productColors = {
  white: '#FFFFFF',
  red: '#EC6262',
  blue: '#6291EC',
};

export default function RadioColorSwitcher({
  stateProductData,
  changeStateProductData,
}: typeProduct) {
  function onToggleColor(pressedColor: ProductObjectType['productWithColor']) {
    let newProductData: typeof stateProductData = {
      ...stateProductData,
      productWithColor: pressedColor,
    };

    const newUniqueId =
      newProductData.productWithUniqueIds[newProductData.size][pressedColor.color];

    newProductData.uniqueId = newUniqueId;

    changeStateProductData(newProductData);
  }

  const colorsMemo = useMemo(
    () =>
      stateProductData?.productWithAllColors?.map((element, keyItem) => {
        const circleBackgroundColor = productColors?.[element.color];

        const isSelected = element.colorId == stateProductData?.productWithColor.colorId;

        const borderColor = isSelected ? appColors.black : appColors.gray;

        function onPressBtn() {
          onToggleColor(element);
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
      }),
    [stateProductData?.productWithAllColors, stateProductData?.productWithColor],
  );

  return <View style={stylesRadioColorSwitcher.containerBtns}>{colorsMemo}</View>;
}
