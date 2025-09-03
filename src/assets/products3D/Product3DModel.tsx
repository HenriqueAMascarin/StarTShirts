import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { useGLTF, useTexture } from '@react-three/drei/native';

import tShirtElement from '@src/assets/products3D/glbModels/simpleTShirt/tShirtElement.glb';
import fabric060_4K_AmbientOcclusion from '@src/assets/products3D/glbModels/simpleTShirt/textures/fabricTexture/fabric060_4K_AmbientOcclusion.jpg';
import fabric060_4K_Displacement from '@src/assets/products3D/glbModels/simpleTShirt/textures/fabricTexture/fabric060_4K_Displacement.jpg';
import fabric060_4K_Roughness from '@src/assets/products3D/glbModels/simpleTShirt/textures/fabricTexture/fabric060_4K_Roughness.jpg';
import fabric060_4K_Color from '@src/assets/products3D/glbModels/simpleTShirt/textures/fabricTexture/fabric060_4K_Color.jpg';

export type Product3DModelType = {
  ElementPath: string;
  color: string;
};

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export default function Product3DModel({ ElementPath, color = 'blue' }: Product3DModelType) {
  const { nodes, materials, scene } = useGLTF(tShirtElement) as unknown as GLTFResult;

  const textures = useTexture({
    map: fabric060_4K_Color,
    roughnessMap: fabric060_4K_Roughness,
    displacementMap: fabric060_4K_Displacement,
    aoMap: fabric060_4K_AmbientOcclusion,
  });
console.log(nodes.Plane.geometry.groups);
  return (
    <group dispose={null}>
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
          aoMap={textures.aoMap}
          roughnessMap={textures.roughnessMap}
          displacementMap={textures.displacementMap}
          displacementScale={1}
          color="red"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
}
