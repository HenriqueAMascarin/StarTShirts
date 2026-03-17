import { appColors } from '@src/utils/appColors';
import { Animated, TextProps } from 'react-native';
import React from 'react';

export default function TextTitleH3(textProps: TextProps) {
  return (
    <Animated.Text
      {...textProps}
      style={[{ fontSize: 24, fontFamily: 'InterBold', color: appColors.black }, textProps.style]}
    />
  );
}
