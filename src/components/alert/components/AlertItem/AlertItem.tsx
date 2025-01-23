import TextDefault from "@src/components/texts/TextDefault";
import React, { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";
import { stylesAlertItem } from "@src/components/alert/components/AlertItem/stylesAlertItem";
import ErrorIcon from "@src/assets/svgs/error_icon.svg";
import SuccessIcon from "@src/assets/svgs/success_icon.svg";

type typeStatus = 'success' | 'error';

export type typeAlerts = { type: typeStatus, message?: string, onHideFn: Function, duration?: number };

type typeStatusObjects = {
    Icon: React.JSX.Element;
    containerClass: object
    status: typeStatus;
}[]

export function AlertItem({ type, message, onHideFn, duration = 5000 }: typeAlerts) {

    const opacityValue = useRef(new Animated.Value(0)).current;

    const translateYAnimated = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0],
        extrapolate: "clamp"
    });

    const alertProperties = useMemo(() => {
        const statusObjects: typeStatusObjects = [
            { Icon: <ErrorIcon />, containerClass: stylesAlertItem.errorContainer, status: 'error' },
            { Icon: <SuccessIcon />, containerClass: stylesAlertItem.successContainer, status: 'success' }
        ];

        return statusObjects.find((properties) => properties.status == type);
    }, []);

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 300,
                delay: 20,
                useNativeDriver: false,
            }),

            Animated.delay(duration),

            Animated.timing(opacityValue, {
                toValue: 0,
                duration: 300,
                delay: 20,
                useNativeDriver: false,
            })
        ]
        ).start(() => {
            onHideFn();
        });
    }, [])

    return (
        <Animated.View style={[stylesAlertItem.defaultAlertContainer,
        { opacity: opacityValue, transform: [{ translateY: translateYAnimated }] },
        alertProperties?.containerClass]}
        >
            {alertProperties?.Icon}
            <TextDefault style={stylesAlertItem.defaultAlertText}>{message}</TextDefault>
        </Animated.View>
    )
}