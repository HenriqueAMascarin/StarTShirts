import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";
import {stylesButtons} from "@App/components/buttons/stylesButtons";


type propsInput = TouchableOpacityProps & { title?: string }

export default function ButtonDefault(buttonProps: propsInput){
    return(
        <TouchableOpacity {...buttonProps} style={[stylesButtons.defaultButton, buttonProps.style]}>
            <TextDefault style={stylesButtons.title}>{buttonProps.title}</TextDefault>
        </TouchableOpacity >
    )
}