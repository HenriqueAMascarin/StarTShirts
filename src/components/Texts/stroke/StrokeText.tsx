import { Text, TextProps, View } from 'react-native';
import React, { useMemo } from 'react';
import { stylesStrokeText } from '@src/components/texts/stroke/styles/stylesStrokeText';

type typeStrokeText = TextProps & {
  strokeColor: string;
};

export default function StrokeText(textProps: typeStrokeText) {
  const fontSizeForStroke = useMemo(() => {
    let newFontSize = 32;

    if (
      typeof textProps.style === 'object' &&
      textProps.style != null &&
      'fontSize' in textProps.style &&
      textProps?.style?.fontSize != null
    ) {
      newFontSize = textProps?.style?.fontSize + 4;
    }
    console.log('123123', newFontSize);
    return newFontSize;
  }, [textProps.style, []]);

  return (
    <View style={stylesStrokeText.container}>
      <Text
        {...textProps}
        style={[stylesStrokeText.generalText, stylesStrokeText.text, textProps.style]}
      />

      <Text
        {...textProps}
        style={[
          stylesStrokeText.generalText,
          stylesStrokeText.strokeText,
          textProps.style,
          { color: textProps.strokeColor, fontSize: fontSizeForStroke },
        ]}
      />
    </View>
  );
}
