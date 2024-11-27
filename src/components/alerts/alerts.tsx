import TextDefault from "@src/components/texts/TextDefault"
import { appColors } from "@src/utils/styleVariables"
import React from "react"
import { View } from "react-native"

interface typeSuccessAlert { message?: string };

export class SuccessAlert extends React.Component<typeSuccessAlert, {}> {
    render() {
        return (
            <View style={{ backgroundColor: appColors.green }}>
                <TextDefault>{this.props.message}</TextDefault>
            </View>
        )
    }
}