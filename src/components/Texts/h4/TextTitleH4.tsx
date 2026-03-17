import { appColors } from '@src/utils/appColors';
import { Text, TextProps } from 'react-native';
import React from 'react';

export default function TextTitleH4(textProps: TextProps) {
  return (
    <Text
      {...textProps}
      style={[{ fontSize: 20, fontFamily: 'InterMedium', color: appColors.black }, textProps.style]}
    />
  );
}
