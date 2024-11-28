import TextDefault from "@src/components/texts/TextDefault"
import React from "react"
import { Animated, View } from "react-native"
import { stylesAlerts } from "@src/components/alerts/stylesAlerts"

interface typeSuccessAlert { message?: string };

export function SuccessAlert(props: typeSuccessAlert) {
    const animatedY = new Animated.Value(-100);

    Animated.timing(animatedY, {
        toValue: 0,
        delay: 10,
        useNativeDriver: false,
    }).start();

    return (
        <Animated.View style={[stylesAlerts.defaultAlertContainer, { transform: [{ translateY: animatedY }] }]}>
            <TextDefault>{props.message}</TextDefault>
        </Animated.View>
    )
}