import { Text, TextInput, TextInputProps, View } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import { stylesInput } from "./stylesInput";

type propsInput = TextInputProps & {label?: string}

export default function InputDefault(inputProps : propsInput) {
    return (
        <View>
            <TextDefault>{inputProps.label}</TextDefault>
            <TextInput {...inputProps} style={stylesInput.defaultStyle}/>
        </View>
    )
}