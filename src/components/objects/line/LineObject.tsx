import React, { View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesLines } from '@src/components/objects/line/styles/stylesLines';

type linesProp = { text?: string; customPaddingVertical?: number };

export default function LineObject({ text, customPaddingVertical }: linesProp) {
  return (
    <View
      style={[
        stylesLines.container,
        { paddingVertical: customPaddingVertical ?? stylesLines.container['paddingVertical'] },
      ]}
    >
      {text != null && <TextDefault style={stylesLines.text}>{text}</TextDefault>}
      <View style={stylesLines.line} />
    </View>
  );
}
