import { useState } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import CheckIcon from "@App/assets/svgs/check_small.svg"
import TextDefault from "@App/components/texts/TextDefault";
import { stylesCheckbox } from "@App/components/checkbox/stylesCheckbox";
import { appColors } from "@App/utils/styleVariables";

export default function Checkbox({ label, style }: { label?: string, style?: StyleProp<ViewStyle> }) {
    const [isSelected, changeIsSelected] = useState(false);

    function toggleCheckbox() {
        changeIsSelected(!isSelected);
    }

    return (
        <TouchableOpacity style={[stylesCheckbox.container, style]} onPress={toggleCheckbox}>
            <View style={[stylesCheckbox.checkboxContainer, { backgroundColor: isSelected ? appColors.blue : appColors.white }]}>
                {isSelected &&
                    <CheckIcon width={13} height={13} />
                }
            </View>
            <TextDefault style={stylesCheckbox.label}>{label}</TextDefault>
        </TouchableOpacity>
    )
}