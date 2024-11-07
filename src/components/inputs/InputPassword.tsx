import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import { stylesInput } from "@App/components/inputs/stylesInput";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import VisibilityOffSvg from "@App/assets/images/visibility_off.svg";
import VisibilitySvg from "@App/assets/images/visibility.svg";
import { useState } from "react";


type propsInput = TextInputProps & { label?: string, errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }

export default function InputPassword(inputProps: propsInput) {

    const [visible, changeVisible] = useState(true);

    function onPressVisible() {
        changeVisible(!visible)
    }

    return (
        <View>
            <TextDefault style={stylesInput.label}>{inputProps.label}</TextDefault>

            <View style={stylesInput.passwordContainer}>
                <TextInput
                    {...inputProps}
                    style={[stylesInput.defaultInput, inputProps.style]}
                    secureTextEntry={!visible}
                />
                <TouchableOpacity
                    style={{ position: 'absolute', top: visible ? 15 : 13, right: 10 }}
                    onPressIn={onPressVisible}>
                    {visible ? <VisibilitySvg /> : <VisibilityOffSvg />}
                </TouchableOpacity>
            </View>

            <TextDefault style={stylesInput.error}>{inputProps?.errors?.message?.toString()}</TextDefault>
        </View>
    )
}