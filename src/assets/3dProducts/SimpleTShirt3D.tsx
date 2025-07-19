import React from 'react'
// import { useGLTF } from '@react-three/drei/native'
// import { Mesh } from 'three';

export type TShirt3DModelType = {
  color: string
}

// export default function TShirt3DModel({color = 'white'}: TShirt3DModelType) {
//   const { nodes, materials } = useGLTF('/classicTShirt.glb');

//   let geometryTShirt = null;

//   if (nodes.Plane instanceof Mesh) {
//     geometryTShirt = nodes.Plane.geometry;
//   }

//   return (
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={geometryTShirt}
//       material={materials.Material}
//       position={[-0.044, 6.699, 0]}
//       rotation={[0, 0, -Math.PI]}
//       scale={[0.007, 0.082, 0.083]}
//       material-color={color}

//     />
//   )
// }

// useGLTF.preload('/classicTShirt.glb')
