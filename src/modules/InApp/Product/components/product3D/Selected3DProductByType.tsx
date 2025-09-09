import ClassicTShirt from '@src/assets/products/classicTShirt/assets3D/ClassicTShirt';
import {
  ProductColorsType,
  TypeProducts,
} from '@src/services/product/dataProducts/types/genericTypes';
import React, { useEffect } from 'react';

export type typeSelected3DProductByType = {
  type: TypeProducts;
  colorElement: ProductColorsType;
  changeIsLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Selected3DProductByType({
  type,
  colorElement,
  changeIsLoadingState,
}: typeSelected3DProductByType) {
  useEffect(() => {
    changeIsLoadingState(false);
  }, []);

  switch (type) {
    case 'tShirt':
      return <ClassicTShirt color={colorElement} />;

    default:
      return <ClassicTShirt color="white" />;
  }
}
