import TextDefault from "@src/components/texts/TextDefault";
import React, { useCallback, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { stylesAlerts } from "@src/components/alerts/stylesAlerts";
import ErrorIcon from "@src/assets/svgs/error_icon.svg";
import SuccessIcon from "@src/assets/svgs/success_icon.svg";

type typeStatus = 'success' | 'error';

export type typeAlerts = { type: typeStatus, message?: string, onHideFn: Function, duration: number };

type typeStatusObjects = {
    Icon: React.JSX.Element;
    containerClass: object
    status: typeStatus;
}[]

export function Alert({ type, message, onHideFn, duration }: typeAlerts) {

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

    const alertProperties = useCallback(() => {
        const statusObjects: typeStatusObjects = [
            { Icon: <ErrorIcon />, containerClass: stylesAlerts.errorContainer, status: 'error' },
            { Icon: <SuccessIcon />, containerClass: stylesAlerts.successContainer, status: 'success' }
        ];

        return statusObjects.find((properties) => properties.status == type);
    }, [])();

    return (
        <Animated.View style={[stylesAlerts.defaultAlertContainer, { opacity: opacityValue }, alertProperties?.containerClass]}>
            {alertProperties?.Icon}
            <TextDefault style={stylesAlerts.defaultAlertText}>{message}</TextDefault>
        </Animated.View>
    )
}