import React, { View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesLines } from '@src/components/objects/line/styles/stylesLines';

type linesProp = { text?: string };

export default function LineObject({ text }: linesProp) {
  return (
    <View style={stylesLines.container}>
      {text != null && <TextDefault style={stylesLines.text}>{text}</TextDefault>}
      <View style={stylesLines.line} />
    </View>
  );
}
