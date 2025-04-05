import { appColors } from '@src/utils/appColors';
import { Text, TextProps } from 'react-native';
import React from 'react';

export default function TextTitleH1(textProps: TextProps) {
    return (
        <Text {...textProps} style={[{fontSize: 38, fontFamily: 'InterBold', color: appColors.black}, textProps.style]} />
    );
}
