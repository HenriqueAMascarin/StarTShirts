import { TextInput, TextInputProps, View } from 'react-native';
import TextDefault from '@src/components/texts/TextDefault';
import { stylesGlobal } from '@src/components/inputs/stylesGlobal';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import React, { ReactNode } from 'react';

type propsInput = TextInputProps & { label?: string, errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined, children?: ReactNode }

export default function InputDefault(inputProps: propsInput) {

    return (
        <View>
            <TextDefault style={stylesGlobal.label}>{inputProps.label}</TextDefault>

            <View style={stylesGlobal.inputContainer}>
                <TextInput
                    {...inputProps}
                    style={[stylesGlobal.defaultInput, inputProps.style]}
                />
            </View>

            <TextDefault style={stylesGlobal.error}>{inputProps?.errors?.message?.toString()}</TextDefault>
        </View>
    );
}
