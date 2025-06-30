import { useMemo } from 'react';
import useColors from '@src/components/colorSwitchers/hooks/useColors';

type UseMemoSelectedImageColorType = { stateColors: ReturnType<typeof useColors>['stateColors'] };

export default function useMemoSelectedImageColor({ stateColors }: UseMemoSelectedImageColorType) {

    const selectedImageColorMemo = useMemo(() => {
        const selected = stateColors.find((element) => element.isSelected)?.urlImage ?? '';

        return selected;
    }, [stateColors]);

    return { selectedImageColorMemo };
}
