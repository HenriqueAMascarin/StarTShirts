import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { useState } from 'react';

type UseColorsType = { colors: ProductObjectType['colors'] };

export default function useColors({ colors }: UseColorsType) {
    function makeColorsArray() {
        const newColors = colors.map((element, index) => {
            return { color: element.color, isSelected: index === 0 ? true : false, urlImage: element.urlImage };
        });

        return newColors;
    }

    const [stateColors, changeStateColors] = useState(makeColorsArray());

    return { stateColors, changeStateColors };
}
