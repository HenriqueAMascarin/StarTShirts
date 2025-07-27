import { View } from 'react-native';
import TextDefault from '@src/components/texts/TextDefault';
import { stylesLines } from '@src/components/lines/stylesLines.ts';

type linesProp = { text?: string }

export default function LineWithText(linesProp: linesProp) {

    return (
        <View style={stylesLines.container}>
            <TextDefault style={stylesLines.text}>{linesProp.text}</TextDefault>
            <View style={stylesLines.line} />
        </View>
    );
}
