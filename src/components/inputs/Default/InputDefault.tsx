import { TextInput, TextInputProps, View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesGlobal } from '@src/components/inputs/stylesGlobal';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import React, { ReactNode } from 'react';
import { appColors } from '@src/utils/appColors';

type propsInput = TextInputProps & {
  label?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  children?: ReactNode;
  required?: boolean;
};

export default function InputDefault(inputProps: propsInput) {
  return (
    <View style={stylesGlobal.container}>
      {inputProps.label && (
        <TextDefault style={stylesGlobal.label}>
          {inputProps.label}
          {inputProps.required && <TextDefault style={stylesGlobal.requiredSymbol}>*</TextDefault>}
        </TextDefault>
      )}

      <TextInput
        {...inputProps}
        style={[stylesGlobal.defaultInput, inputProps.style]}
        placeholderTextColor={appColors.gray}
      />
      
      <TextDefault style={stylesGlobal.error}>
        {inputProps?.errors?.message?.toString()}
      </TextDefault>
    </View>
  );
}
