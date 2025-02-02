import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import CheckIcon from "@src/assets/svgs/check_small.svg"
import TextDefault from "@src/components/texts/TextDefault";
import { stylesCheckbox } from "@src/components/checkbox/stylesCheckbox";
import { appColors } from "@src/utils/styleVariables";

type CheckboxType = {
    stateValue: boolean,
    changeStateValueFn: React.Dispatch<React.SetStateAction<boolean>>,
    label?: string,
    style?: StyleProp<ViewStyle>
}

export default function Checkbox({ stateValue, changeStateValueFn, label, style }: CheckboxType) {

    function toggleCheckbox() {
        changeStateValueFn(!stateValue);
    }

    return (
        <TouchableOpacity style={[stylesCheckbox.container, style]} onPress={toggleCheckbox}>
            <View style={[stylesCheckbox.checkboxContainer, { backgroundColor: stateValue ? appColors.blue : appColors.white }]}>
                {stateValue &&
                    <CheckIcon width={13} height={13} />
                }
            </View>
            <TextDefault style={stylesCheckbox.label}>{label}</TextDefault>
        </TouchableOpacity>
    )
}