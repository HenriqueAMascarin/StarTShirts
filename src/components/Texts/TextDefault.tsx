import { Text, TextProps } from "react-native";

export default function TextDefault(inputProps: TextProps) {
    return (
        <Text style={[{fontSize: 16, fontFamily: 'InterMedium'}, inputProps.style]} {...inputProps}/>
    )
}