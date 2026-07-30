import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { appColors } from '@src/utils/appColors';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { stylesRadioColorSwitcher } from '@src/components/colorSwitchers/radioType/styles/stylesRadioColorSwitcher';
import { useNavigation } from '@react-navigation/native';

type typeProduct = {
  stateProductData: ProductObjectType;
  changeStateProductData?: React.Dispatch<React.SetStateAction<ProductObjectType>>;
  shouldRedirectToPage?: boolean;
};

const productColors = {
  white: '#FFFFFF',
  red: '#EC6262',
  blue: '#6291EC',
};

export default function RadioColorSwitcher({
  stateProductData,
  changeStateProductData,
  shouldRedirectToPage,
}: typeProduct) {
  const navigation = useNavigation();

  function onToggleColor(pressedColor: ProductObjectType['productWithColor']) {
    let newProductData: typeof stateProductData = {
      ...stateProductData,
    };

    const newUniqueId =
      newProductData?.productWithUniqueIds?.[newProductData?.size]?.[pressedColor?.color];

    if (newUniqueId) {
      if (shouldRedirectToPage) {
        navigation.replaceParams({ uniqueId: newUniqueId });
      } else if (changeStateProductData) {
        newProductData.productWithColor = pressedColor;

        newProductData.uniqueId = newUniqueId;

        changeStateProductData(newProductData);
      }
    }
  }

  function colorElements() {
    return stateProductData?.productWithAllColors?.map((element, keyItem) => {
      const circleBackgroundColor = productColors?.[element?.color];

      const isSelected = element?.colorId == stateProductData?.productWithColor?.colorId;

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
    });
  }

  return <View style={stylesRadioColorSwitcher.containerBtns}>{colorElements()}</View>;
}
