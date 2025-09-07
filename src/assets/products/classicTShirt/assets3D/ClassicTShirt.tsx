import React, { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { useGLTF, useTexture } from '@react-three/drei/native';

import classicTShirtRaw from '@src/assets/products/classicTShirt/assets3D/classicTShirtRaw.glb';
import Fabric081C_2K_JPG_AmbientOcclusion from '@src/assets/products/classicTShirt/assets3D/textures/fabricTexture/Fabric081C_2K_JPG_AmbientOcclusion.jpg';
import Fabric081C_2K_JPG_Displacement from '@src/assets/products/classicTShirt/assets3D/textures/fabricTexture/Fabric081C_2K_JPG_Displacement.jpg';
import Fabric081C_2K_JPG_Roughness from '@src/assets/products/classicTShirt/assets3D/textures/fabricTexture/Fabric081C_2K_JPG_Roughness.jpg';
import Fabric081C_2K_JPG_Color from '@src/assets/products/classicTShirt/assets3D/textures/fabricTexture/Fabric081C_2K_JPG_Color.jpg';
import Fabric081C_2K_JPG_NormalGL from '@src/assets/products/classicTShirt/assets3D/textures/fabricTexture/Fabric081C_2K_JPG_NormalGL.jpg';
import { ProductColorsType } from '@src/services/product/dataProducts/types/genericTypes';
import { colorsTShirt } from '@src/assets/products/classicTShirt/images/colorsTShirt';

type Product3DModelType = {
  color: ProductColorsType;
};

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

const colorsClassicTShirt: { color: ProductColorsType; value: string }[] = [
  { color: 'white', value: colorsTShirt.white },
  { color: 'blue', value: colorsTShirt.blue },
  { color: 'red', value: colorsTShirt.red },
];

export default function ClassicTShirt({ color = 'white' }: Product3DModelType) {
  const { nodes } = useGLTF(classicTShirtRaw) as unknown as GLTFResult;

  const textures = useTexture({
    map: Fabric081C_2K_JPG_Color,
    normalMap: Fabric081C_2K_JPG_NormalGL,
    roughnessMap: Fabric081C_2K_JPG_Roughness,
    displacementMap: Fabric081C_2K_JPG_Displacement,
    aoMap: Fabric081C_2K_JPG_AmbientOcclusion,
  });

  const colorValue = useMemo(() => {
    const value = colorsClassicTShirt.find((elementColor) => elementColor.color === color)?.value;

    return value;
  }, [color]);

  return (
    <group>
      <Suspense>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          position={[0, 3, 0]}
          rotation={[-Math.PI, 3.14, 0]}
          scale={[0.007, 0.082, 0.083]}
        >
          <meshStandardMaterial
            map={textures.map}
            displacementMap={textures.displacementMap}
            displacementScale={0}
            normalMap={textures.normalMap}
            roughnessMap={textures.roughnessMap}
            aoMap={textures.aoMap}
            color={colorValue}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
      </Suspense>
    </group>
  );
}
