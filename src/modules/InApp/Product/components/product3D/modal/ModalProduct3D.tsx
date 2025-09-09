import Selected3DProductByType from '@src/modules/InApp/Product/components/product3D/Selected3DProductByType';
import SimpleModal from '@src/components/modal/simple/SimpleModal';
import { appColors } from '@src/utils/appColors';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';
import React, { Suspense, useEffect, useState } from 'react';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import { Animated, View } from 'react-native';
import {
  ProductColorsType,
  TypeProducts,
} from '@src/services/product/dataProducts/types/genericTypes';
import { stylesModalProduct3D } from '@src/modules/InApp/Product/components/product3D/modal/styles/stylesModalProduct3D';

type typeProduct3DModal = {
  statesSimpleModal: {
    simpleModalState: boolean;
    changeSimpleModalState: React.Dispatch<React.SetStateAction<boolean>>;
  };
  typeProduct: TypeProducts;
  colorProduct: ProductColorsType;
};

export default function ModalProduct3D({
  statesSimpleModal,
  typeProduct,
  colorProduct,
}: typeProduct3DModal) {
  const [isLoading, changeIsLoading] = useState(true);

  useEffect(() => {
    
  })

  return (
    <SimpleModal
      visibleStates={{
        visible: statesSimpleModal.simpleModalState,
        changeVisibleState: statesSimpleModal.changeSimpleModalState,
      }}
      backgroundModalColor={appColors.yellow}
    >
      {isLoading && (
        <View style={stylesModalProduct3D.loadingContainer}>
          <LoadingScreen />
        </View>
      )}

      <Animated.View>
        <Canvas>
          <Suspense>
            <color attach="background" args={[appColors.yellow]} />

            <group>
              <ambientLight intensity={0.5} />

              <directionalLight position={[5, 5, 5]} intensity={1} />

              <directionalLight position={[5, 10, 15]} intensity={1} />

              <directionalLight position={[5, 10, -15]} intensity={1} />

              <directionalLight position={[-10, 10, -15]} intensity={2} />

              <directionalLight position={[-10, 10, 15]} intensity={2} />

              <Selected3DProductByType
                type={typeProduct}
                colorElement={colorProduct}
                changeIsLoadingState={changeIsLoading}
              />

              <OrbitControls enablePan={false} enableZoom={false} />
            </group>
          </Suspense>
        </Canvas>
      </Animated.View>
    </SimpleModal>
  );
}
