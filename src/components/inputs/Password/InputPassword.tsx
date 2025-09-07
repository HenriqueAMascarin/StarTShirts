import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesGlobal } from '@src/components/inputs/stylesGlobal';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import VisibilityOffSvg from '@src/assets/svgs/visibility_off.svg';
import VisibilitySvg from '@src/assets/svgs/visibility.svg';
import React, { useState } from 'react';
import { stylesInputPassword } from '@src/components/inputs/Password/stylesInputPassword';
import { appColors } from '@src/utils/appColors';

type propsInput = TextInputProps & {
  label?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  forgotPassword?: { hasForgotBtn: boolean; function: Function };
};

export default function InputPassword(inputProps: propsInput) {
  const [visible, changeVisible] = useState(false);

  function onPressVisible() {
    changeVisible(!visible);
  }

  function onForgotPassword() {
    inputProps.forgotPassword?.function();
  }

  return (
    <View>
      <TextDefault style={stylesGlobal.label}>{inputProps.label}</TextDefault>

      <View style={stylesGlobal.inputContainer}>
        <TextInput
          {...inputProps}
          style={[stylesGlobal.defaultInput, inputProps.style]}
          secureTextEntry={!visible}
          placeholderTextColor={appColors.black}
        />
        <TouchableOpacity style={stylesInputPassword.passwordRevealBtn} onPressIn={onPressVisible}>
          <View style={{ paddingTop: visible ? 0 : 3 }}>
            {visible ? <VisibilitySvg /> : <VisibilityOffSvg />}
          </View>
        </TouchableOpacity>
      </View>

      <View style={stylesInputPassword.textsContainer}>
        <TextDefault style={stylesGlobal.error}>
          {inputProps?.errors?.message?.toString()}
        </TextDefault>

        {inputProps.forgotPassword?.hasForgotBtn && (
          <TouchableOpacity onPressIn={onForgotPassword}>
            <TextDefault style={stylesInputPassword.forgotPasswordText}>
              Forgot password?
            </TextDefault>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
