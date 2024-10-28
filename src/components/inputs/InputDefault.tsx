import { Text, TextInput, TextInputProps, View } from "react-native";
import TextDefault from "@App/components/Texts/TextDefault";

type propsInput = TextInputProps & {label?: string}

export default function InputDefault(inputProps : propsInput) {
    return (
        <View>
            <TextDefault>{inputProps.label}</TextDefault>
            <TextInput {...inputProps} />
        </View>
    )
}