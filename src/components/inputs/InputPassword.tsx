import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import TextDefault from "@src/components/texts/TextDefault";
import { stylesInput } from "@src/components/inputs/stylesInput";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import VisibilityOffSvg from "@src/assets/svgs/visibility_off.svg";
import VisibilitySvg from "@src/assets/svgs/visibility.svg";
import { useState } from "react";


type propsInput = TextInputProps &
{
    label?: string,
    errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
    forgotPassword?: { hasForgotBtn: boolean, function: Function }
}

export default function InputPassword(inputProps: propsInput) {

    const [visible, changeVisible] = useState(false);

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
                    style={stylesInput.passwordRevealBtn}
                    onPressIn={onPressVisible}>
                    <View style={{paddingTop: visible ? 0 : 3}}>
                        {visible ? <VisibilitySvg /> : <VisibilityOffSvg />}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={stylesInput.textsContainer}>
                <TextDefault style={stylesInput.error}>{inputProps?.errors?.message?.toString()}</TextDefault>

                {inputProps.forgotPassword?.hasForgotBtn &&
                    <TouchableOpacity onPress={() => inputProps.forgotPassword?.function()}>
                        <TextDefault style={stylesInput.forgotPasswordText}>Forgot password?</TextDefault>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}