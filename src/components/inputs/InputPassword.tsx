import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import { stylesInput } from "@App/components/inputs/stylesInput";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import VisibilityOffSvg from "@App/assets/images/visibility_off.svg";

type propsInput = TextInputProps & { label?: string, errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }

export default function InputPassword(inputProps: propsInput) {

    return (
        <View>
            <TextDefault style={stylesInput.label}>{inputProps.label}</TextDefault>

            <View>
                <TextInput
                    {...inputProps}
                    style={[stylesInput.defaultInput, inputProps.style]}
                />
                <TouchableOpacity><VisibilityOffSvg/></TouchableOpacity>
            </View>

            <TextDefault style={stylesInput.error}>{inputProps?.errors?.message?.toString()}</TextDefault>
        </View>
    )
}