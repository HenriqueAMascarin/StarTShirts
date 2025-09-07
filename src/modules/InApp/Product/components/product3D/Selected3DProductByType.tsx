import ClassicTShirt from '@src/assets/products/classicTShirt/assets3D/ClassicTShirt';
import { ProductColorsType, TypeProducts } from '@src/services/product/dataProducts/types/genericTypes';
import React from 'react';

export type typeSelected3DProductByType = {
    type: TypeProducts,
    colorElement: ProductColorsType,
}

export default function Selected3DProductByType({type, colorElement}: typeSelected3DProductByType) {
  switch (type) {
    case 'tShirt':
      return <ClassicTShirt color={colorElement}/>;

    default:
      return <ClassicTShirt color="white" />;
  }
}
