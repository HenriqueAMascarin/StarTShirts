import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesDefaultButton } from '@src/components/buttons/default/style/stylesDefaultButton';
import React from 'react';

type buttonTypes = TouchableOpacityProps & {
  title?: string;
  textProps?: TextProps;
};

export default function DefaultButton(buttonProps: buttonTypes) {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={[
        stylesDefaultButton.defaultButton,
        buttonProps?.style,
      ]}
    >
      <TextDefault
        style={[
          stylesDefaultButton.title,
          buttonProps.textProps?.style,
        ]}
      >
        {buttonProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}
