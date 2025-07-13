import { useMemo } from 'react';
import useColors from '@src/components/colorSwitchers/hooks/useColors';

type UseMemoSelectedImageColorType = { stateColors: ReturnType<typeof useColors>['stateColors'] };

export default function useMemoSelectedColorData({ stateColors }: UseMemoSelectedImageColorType) {

    const selectedColorMemoData = useMemo(() => {
        const selected = stateColors.find((element) => element.isSelected) ?? { color: 'white', isSelected: false, urlImage: '' };

        return selected;
    }, [stateColors]);

    return { selectedColorMemoData };
}
