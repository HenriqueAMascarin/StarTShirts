import TextDefault from "@src/components/texts/TextDefault"
import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import { stylesAlerts } from "@src/components/alerts/stylesAlerts"

export type typeAlerts = { type: 'success' | 'error', message?: string, onHideFn: Function, duration: number };

export function Alert({ message, onHideFn, duration }: typeAlerts) {

    const opacityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.delay(duration),
            Animated.timing(opacityValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            })
        ]
        ).start(() => {
            onHideFn();
        });
    }, [])

    return (
        <Animated.View style={[stylesAlerts.defaultAlertContainer, { opacity: opacityValue }]}>
            <TextDefault>{message}</TextDefault>
        </Animated.View>
    )
}