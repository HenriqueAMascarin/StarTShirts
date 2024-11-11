import { appColors } from "@App/utils/styleVariables";
import { Text, TextProps } from "react-native";

export default function TextDefault(textProps: TextProps) {
    return (
        <Text {...textProps} style={[{fontSize: 38, fontFamily: 'InterBold', color: appColors.black}, textProps.style]} />
    )
}