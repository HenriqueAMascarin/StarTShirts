import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import TextDefault from "@App/components/texts/TextDefault";

type propsInput = TouchableOpacityProps & { title?: string }

export default function ButtonDefault(buttonProps: propsInput){
    return(
        <TouchableOpacity {...buttonProps}>
            <TextDefault>{buttonProps.title}</TextDefault>
        </TouchableOpacity >
    )
}