import { TextInput, TextInputProps, View } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import { stylesInput } from "@App/components/inputs/stylesInput";
import { appColors } from "@App/utils/styleVariables";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type propsInput = TextInputProps & { label?: string, errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }

export default function InputDefault(inputProps: propsInput) {

    return (
        <View>
            <TextDefault style={stylesInput.label}>{inputProps.label}</TextDefault>

            <TextInput
                {...inputProps}
                style={[stylesInput.defaultInput, inputProps.style]}
            />

            <TextDefault style={stylesInput.error}>{inputProps?.errors?.message?.toString()}</TextDefault>
        </View>
    )
}