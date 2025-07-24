import React, { Suspense, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextDefault from '@src/components/texts/TextDefault';
import TextTitleH1 from '@src/components/texts/h1/TextTitleH1';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { getProducts } from '@src/services/product/dataProducts/methods/getProducts';
import { TouchableOpacity, View, Image } from 'react-native';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import SizesProduct from '@src/modules/InApp/Product/components/sizesChanger/SizesProduct';
import useSizes from '@src/modules/InApp/Product/components/sizesChanger/hooks/useSizes';
import RadioColorSwitcher from '@src/components/colorSwitchers/radioType/RadioColorSwitcher';
import useColors from '@src/components/colorSwitchers/hooks/useColors';
import useMemoSelectedImageColor from '@src/components/colorSwitchers/hooks/useMemoSelectedColorData';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import useSimpleModalHook from '@src/components/modal/simple/hooks/useSimpleModalHook';
import SimpleModal from '@src/components/modal/simple/SimpleModal';
import { appColors } from '@src/utils/appColors';
import TShirt3DModel, { TShirt3DModelType } from '@src/assets/products3D/tshirt/SimpleTShirt3D';
import { Canvas } from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native';

export type PropsProductIndex = NativeStackScreenProps<RootStackParamList, 'home/product'>;

async function getInitialProductResponse({ id }: { id: number }) {
    const products = await getProducts({ id });

    const product = products?.[0];

    return product;
}

function TShirt3DScene(props: TShirt3DModelType) {

    return (
        <Canvas>
            <Suspense>
                <group>
                    <ambientLight intensity={0.1} />

                    <TShirt3DModel {...props} />

                    <OrbitControls enablePan={false} />
                </group>
            </Suspense>
        </Canvas>
    )
}

export default function ProductIndex({ route }: PropsProductIndex) {
    const { id } = route.params;

    const [product, changeProduct] = useState<null | Awaited<ReturnType<typeof getInitialProductResponse>>>(null);

    useEffect(() => {
        (async () => {
            const newProduct = await getInitialProductResponse({ id });

            changeProduct(newProduct)
        })();
    }, [])

    const { stateSizes, changeStateSizes } = useSizes();

    const { stateColors, changeStateColors } = useColors({ colors: product?.colors ?? [] });

    const { selectedColorMemoData } = useMemoSelectedImageColor({ stateColors });

    const { simpleModalState, changeSimpleModalState } = useSimpleModalHook();

    function open3DProductModal() {
        changeSimpleModalState(true);
    }

    return (
        <Suspense fallback={<LoadingScreen />}>

            <SimpleModal visibleStates={{ visible: simpleModalState, changeVisibleState: changeSimpleModalState }} backgroundModalColor={appColors.yellow}>
                <TShirt3DScene color={'red'} />
            </SimpleModal>

            <View>
                <View style={{position: 'relative'}}>
                    <TouchableOpacity onPressIn={open3DProductModal}><TextDefault>3D</TextDefault></TouchableOpacity>
                    {/* src={require(selectedColorMemoData?.urlImage)} */}
                    <Image width={300} height={200} alt={product?.title} />
                </View>

                <View>
                    <TextTitleH1>{product?.title}</TextTitleH1>
                    <TextDefault>{product?.price}</TextDefault>
                </View>

                <SizesProduct stateSizes={stateSizes} changeStateSizes={changeStateSizes} />

                <View>
                    <RadioColorSwitcher stateColors={stateColors} changeStateColors={changeStateColors} />
                </View>

                <View>
                    <ButtonDefault title="Purchase" />

                    <ButtonDefault title="Add to Wish List" />
                </View>

                <View>
                    <TextDefault>Details & care</TextDefault>

                    <TextDefault>{product?.details.info}</TextDefault>

                    <View>
                        {product?.details.list.map((detail, keyDetail) => {
                            return (
                                <TextDefault key={keyDetail}>
                                    {`\u2022 ${detail}`}
                                </TextDefault>
                            );
                        })}
                    </View>
                </View>
            </View>

        </Suspense>
    );
}
