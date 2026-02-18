import { appColors } from '@src/utils/appColors';
import { Text, TextProps } from 'react-native';
import React from 'react';

export default function TextTitleH3(textProps: TextProps) {
  return (
    <Text
      {...textProps}
      style={[{ fontSize: 26, fontFamily: 'InterBold', color: appColors.black }, textProps.style]}
    />
  );
}
