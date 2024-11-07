import { View } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import { stylesLines } from "@App/components/objects/lines/stylesLines";

type linesProp = { text?: string }

export default function LineWithText(linesProp: linesProp) {

    return (
        <View style={stylesLines.container}>
            <TextDefault style={stylesLines.text}>{linesProp.text}</TextDefault>
            <View style={stylesLines.line}></View>
        </View>
    )
}