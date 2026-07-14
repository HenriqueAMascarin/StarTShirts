import React, { useMemo } from 'react';
import TextDefault from '@src/components/texts/default/TextDefault';
import { TouchableOpacity, View } from 'react-native';
import { appColors } from '@src/utils/appColors';
import { stylesSizesProduct } from '@src/modules/InApp/Product/components/sizesChanger/styles/stylesSizesProduct';
import { useNavigation } from '@react-navigation/native';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

type SizesProductType = {
  productData: ProductObjectType;
};

export default function SizesProduct({ productData }: SizesProductType) {
  const navigation = useNavigation();

  function onChangeSize(sizeToBeActive: ProductObjectType['size']) {
    const newUniqueId =
      productData?.productWithUniqueIds?.[sizeToBeActive]?.[
        productData?.productWithColor?.color
      ];

    if (newUniqueId) {
      navigation.navigate('home/product', { uniqueId: newUniqueId });
    }
  }

  const sizeElements = useMemo(
    () =>
      productData?.sizes?.map((size, keySize) => {
        const isSelected = productData.size == size;

        const backgroundColor = isSelected ? appColors.black : appColors.white;

        const textColor = isSelected ? appColors.white : appColors.black;

        return (
          <TouchableOpacity
            style={[stylesSizesProduct.sizeBtn, { backgroundColor }]}
            onPressIn={() => onChangeSize(size)}
            key={keySize}
          >
            <TextDefault style={[stylesSizesProduct.sizeBtnText, { color: textColor }]}>
              {size?.toUpperCase()}
            </TextDefault>
          </TouchableOpacity>
        );
      }),
    [productData?.sizes],
  );

  return (
    <View style={stylesSizesProduct.container}>
      <TextDefault style={stylesSizesProduct.textTitle}>Sizes</TextDefault>

      <View style={stylesSizesProduct.containerBtn}>{sizeElements}</View>
    </View>
  );
}
