import React from 'react';
// import { Gltf, useGLTF } from '@react-three/drei/native';
// import Element from '@src/assets/products3D/tshirt/tShirtElement.glb';

export type TShirt3DModelType = {
  color: string
}

export default function TShirt3DModel({ color = 'white' }: TShirt3DModelType) {

  return (
  //  <group dispose={null}>
  //     <Gltf
  //       castShadow
  //       receiveShadow
  //       src={Element}
  //       position={[0, 3, 0]}
  //       rotation={[-Math.PI, 0, 0]}
  //       scale={[0.006, 0.072, 0.073]}
  //     />
  //   </group>
  <></>
  );
}

// useGLTF.preload(Element);
