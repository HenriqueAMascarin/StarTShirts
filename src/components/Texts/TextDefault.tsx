import { Text, TextProps } from "react-native";

export default function TextDefault(inputProps: TextProps) {
    return (
        <Text style={{fontSize: 16}} {...inputProps}/>
    )
}