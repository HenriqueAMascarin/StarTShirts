import { appColors } from '@src/utils/appColors';
import { Text, TextProps } from 'react-native';
import React from 'react';

export default function TextDefault(textProps: TextProps) {
    return (
        <Text {...textProps} style={[{fontSize: 16, fontFamily: 'InterMedium', color: appColors.black}, textProps.style]} />
    );
}
