import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import TextDefault from '@src/components/texts/TextDefault';
import { stylesGlobal } from '@src/components/inputs/stylesGlobal';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import VisibilityOffSvg from '@src/assets/svgs/visibility_off.svg';
import VisibilitySvg from '@src/assets/svgs/visibility.svg';
import React, { useState } from 'react';
import { stylesInputPassword } from '@src/components/inputs/Password/stylesInputPassword';

type propsInput = TextInputProps &
{
    label?: string,
    errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
    forgotPassword?: { hasForgotBtn: boolean, function: Function }
}

export default function InputPassword(inputProps: propsInput) {

    const [visible, changeVisible] = useState(false);

    function onPressVisible() {
        changeVisible(!visible);
    }

    return (
        <View>
            <TextDefault style={stylesGlobal.label}>{inputProps.label}</TextDefault>

            <View style={stylesGlobal.inputContainer}>
                <TextInput
                    {...inputProps}
                    style={[stylesGlobal.defaultInput, inputProps.style]}
                    secureTextEntry={!visible}
                />
                <TouchableOpacity
                    style={stylesInputPassword.passwordRevealBtn}
                    onPressIn={onPressVisible}>
                    <View style={{paddingTop: visible ? 0 : 3}}>
                        {visible ? <VisibilitySvg /> : <VisibilityOffSvg />}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={stylesInputPassword.textsContainer}>
                <TextDefault style={stylesGlobal.error}>{inputProps?.errors?.message?.toString()}</TextDefault>

                {inputProps.forgotPassword?.hasForgotBtn &&
                    <TouchableOpacity onPress={() => inputProps.forgotPassword?.function()}>
                        <TextDefault style={stylesInputPassword.forgotPasswordText}>Forgot password?</TextDefault>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}