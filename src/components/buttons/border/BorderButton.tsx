import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesBorderButton } from '@src/components/buttons/border/style/stylesBorderButton';
import React from 'react';

type buttonTypes = TouchableOpacityProps & {
  title?: string;
  textProps?: TextProps;
};

export default function BorderButton(buttonProps: buttonTypes) {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={[stylesBorderButton.borderButton, buttonProps?.style]}
    >
      <TextDefault style={[stylesBorderButton.borderTitle, buttonProps.textProps?.style]}>
        {buttonProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}
