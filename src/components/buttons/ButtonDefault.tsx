import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesButtons } from '@src/components/buttons/stylesButtons';
import React from 'react';

type buttonTypes = TouchableOpacityProps & {
  title?: string;
  borderType?: boolean;
  textProps?: TextProps;
};

// TODO SEPARAR 2 BOTOES UM DE BORDA E OUTRO SEM
export default function ButtonDefault(buttonProps: buttonTypes) {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={[
        stylesButtons.defaultButton,
        buttonProps.borderType && stylesButtons.borderButton,
        buttonProps.style,
      ]}
    >
      <TextDefault
        style={[
          stylesButtons.title,
          buttonProps.borderType && stylesButtons.borderTitle,
          buttonProps.textProps?.style,
        ]}
      >
        {buttonProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}
