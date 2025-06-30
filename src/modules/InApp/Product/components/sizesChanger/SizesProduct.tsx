import React from 'react';
import TextDefault from '@src/components/texts/TextDefault';
import { TouchableOpacity, View } from 'react-native';
import { appColors } from '@src/utils/appColors';

type StateSizesType = {
    text: string;
    isSelected: boolean;
}[];

type SizesProductType = { stateSizes: StateSizesType, changeStateSizes: React.Dispatch<React.SetStateAction<StateSizesType>> }

export default function SizesProduct({ stateSizes, changeStateSizes }: SizesProductType) {

    function onChangeSize(sizeToBeActive: string) {
        const newStateSizes = { ...stateSizes };

        const isSizeActive = newStateSizes.some((size) =>
            size.isSelected && size.text === sizeToBeActive
        );

        if (!isSizeActive) {
            for (let index = 0; index < newStateSizes.length; index++) {
                if (newStateSizes[index].text === sizeToBeActive) {
                    newStateSizes[index].isSelected = true;
                } else {
                    newStateSizes[index].isSelected = false;
                }
            }

            changeStateSizes(newStateSizes);
        }
    }

    return (
        <View>
            <TextDefault>Sizes</TextDefault>

            <View>
                {stateSizes.map((state) => {

                    const backgroundColor = state.isSelected ? appColors.black : appColors.white;

                    const textColor = state.isSelected ? appColors.white : appColors.black;

                    return (
                        <TouchableOpacity style={{ backgroundColor }} onPressIn={() => onChangeSize(state.text)} >
                            <TextDefault style={{ color: textColor }}>{state.text}</TextDefault>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
