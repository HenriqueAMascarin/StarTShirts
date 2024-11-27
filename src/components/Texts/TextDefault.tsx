import { appColors } from "@src/utils/styleVariables";
import { Text, TextProps } from "react-native";

export default function TextDefault(textProps: TextProps) {
    return (
        <Text {...textProps} style={[{fontSize: 16, fontFamily: 'InterMedium', color: appColors.black}, textProps.style]} />
    )
}