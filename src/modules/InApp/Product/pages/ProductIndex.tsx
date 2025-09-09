import React, { Suspense, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextDefault from '@src/components/texts/default/TextDefault';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { TouchableOpacity, View, Image } from 'react-native';
import SizesProduct from '@src/modules/InApp/Product/components/sizesChanger/SizesProduct';
import useSizes from '@src/modules/InApp/Product/components/sizesChanger/hooks/useSizes';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedColorData from '@src/components/colorSwitchers/hooks/useMemoSelectedColorData';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import useSimpleModalHook from '@src/components/modal/simple/hooks/useSimpleModalHook';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { stylesProductIndex } from '@src/modules/InApp/Product/styles/stylesProductIndex';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import LineObject from '@src/components/objects/line/LineObject';
import { firstLetterToUppercase } from '@src/utils/firstLetterToUppercase';
import BorderButton from '@src/components/buttons/border/BorderButton';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import ModalProduct3D from '@src/modules/InApp/Product/components/product3D/modal/ModalProduct3D';

export type PropsProductIndex = NativeStackScreenProps<RootStackParamList, 'home/product'>;

async function getInitialProductResponse({ id }: { id: number }) {
  const products = await getProducts({ id });

  const product = products?.[0];

  return product;
}

function ProductContent({ productItem }: { productItem: ProductObjectType }) {
  const { stateColors, changeStateColors } = useColors({ colors: productItem?.colors ?? [] });

  const { selectedColorMemoData } = useMemoSelectedColorData({ stateColors });

  const { stateSizes, changeStateSizes } = useSizes();

  const { simpleModalState, changeSimpleModalState } = useSimpleModalHook();

  function open3DProductModal() {
    changeSimpleModalState(true);
  }

  return (
    <>
      <ModalProduct3D
        statesSimpleModal={{ simpleModalState, changeSimpleModalState }}
        colorProduct={selectedColorMemoData.color}
        typeProduct={productItem.type}
      />

      <MainContainer>
        <View>
          <View style={stylesProductIndex.containerImage}>
            <TouchableOpacity onPressIn={open3DProductModal} style={stylesProductIndex.btn3D}>
              <TextDefault style={stylesProductIndex.btn3DText}>3D</TextDefault>
            </TouchableOpacity>

            {selectedColorMemoData.urlImage && (
              <Image
                alt={productItem?.title}
                width={255}
                height={265}
                source={selectedColorMemoData.urlImage}
                style={stylesProductIndex.image}
              />
            )}
          </View>

          <View style={stylesProductIndex.infoSection}>
            <PaddingContainer>
              <View style={stylesProductIndex.flexContainerInfos}>
                <View style={stylesProductIndex.titleSection}>
                  <TextTitleH2>{productItem?.title}</TextTitleH2>

                  <TextDefault style={stylesProductIndex.textPrice}>
                    ${productItem?.price.toFixed(2)}
                  </TextDefault>
                </View>

                <LineObject />

                <View style={stylesProductIndex.optionsContainer}>
                  <SizesProduct stateSizes={stateSizes} changeStateSizes={changeStateSizes} />

                  <View style={stylesProductIndex.colorContainer}>
                    <TextDefault style={stylesProductIndex.colorTitle}>
                      Color:
                      <TextDefault style={stylesProductIndex.colorTitleCurrent}>
                        {' ' + firstLetterToUppercase(selectedColorMemoData.color)}
                      </TextDefault>
                    </TextDefault>

                    <RadioColorSwitcher
                      stateColors={stateColors}
                      changeStateColors={changeStateColors}
                    />
                  </View>
                </View>

                <LineObject />

                <View style={stylesProductIndex.buttonsContainer}>
                  <DefaultButton title="Purchase" style={stylesProductIndex.buttonsStyles} />

                  <BorderButton title="Add to Wish List" style={stylesProductIndex.buttonsStyles} />
                </View>
              </View>
            </PaddingContainer>

            <View style={stylesProductIndex.detailsContainer}>
              <PaddingContainer>
                <TextDefault style={stylesProductIndex.detailsTitle}>Details & care</TextDefault>

                <TextDefault style={stylesProductIndex.detailsInfo}>
                  {productItem?.details.info}
                </TextDefault>

                <View>
                  {productItem?.details.list.map((detail, keyDetail) => {
                    return (
                      <TextDefault key={keyDetail}>
                        <TextDefault style={stylesProductIndex.detailsBulletText}>
                          {'\u2022'}
                        </TextDefault>
                        {detail}
                      </TextDefault>
                    );
                  })}
                </View>
              </PaddingContainer>
            </View>
          </View>
        </View>
      </MainContainer>
    </>
  );
}

export default function ProductIndex({ route }: PropsProductIndex) {
  const { id } = route.params;

  const [productData, changeProductData] = useState<null | Awaited<
    ReturnType<typeof getInitialProductResponse>
  >>(null);

  (async function setEditData() {
    const newProduct = await getInitialProductResponse({ id });

    changeProductData(newProduct);
  })();

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        {productData != null && <ProductContent productItem={productData} />}
      </Suspense>
    </>
  );
}
