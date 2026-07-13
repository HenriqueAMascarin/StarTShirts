import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { useState } from 'react';

type UseColorsType = { productWithAllColors: ProductObjectType['productWithAllColors'] };

export default function useColors({ productWithAllColors }: UseColorsType) {
    function makeColorsArray() {
        const newColors = productWithAllColors.map((element, index) => {
            return { color: element.color, isSelected: index === 0 ? true : false, urlImage: element.urlImage };
        });

        return newColors;
    }

    const [stateColors, changeStateColors] = useState(makeColorsArray());

    return { stateColors, changeStateColors };
}
