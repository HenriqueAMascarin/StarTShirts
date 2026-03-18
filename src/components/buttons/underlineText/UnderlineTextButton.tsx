import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import React from 'react';
import { stylesUnderlineButton } from '@src/components/buttons/underlineText/style/stylesUnderlineButton';

type buttonTypes = TouchableOpacityProps & {
  title?: string;
  textProps?: TextProps;
};

export default function UnderlineTextButton(buttonProps: buttonTypes) {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={[
        stylesUnderlineButton.defaultButton,
        buttonProps?.style,
      ]}
    >
      <TextDefault
        style={[
          stylesUnderlineButton.title,
          buttonProps.textProps?.style,
        ]}
      >
        {buttonProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}
