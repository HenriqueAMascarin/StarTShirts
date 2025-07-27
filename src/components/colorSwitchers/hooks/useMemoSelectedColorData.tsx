import { useMemo } from 'react';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

type UseMemoSelectedImageColorType = { stateColors: ProductObjectType['colors'] };

export default function useMemoSelectedColorData({ stateColors }: UseMemoSelectedImageColorType) {

    const selectedColorMemoData = useMemo(() => {
        const selected: UseMemoSelectedImageColorType['stateColors'][0] = stateColors.find((element) => element.isSelected) ?? { color: 'white', isSelected: false, urlImage: require('') };

        return selected;
    }, [stateColors]);

    return { selectedColorMemoData };
}
