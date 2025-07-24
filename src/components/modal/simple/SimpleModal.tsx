import { Animated, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { ReactNode, useEffect, useRef } from 'react';
import CloseSvg from '@src/assets/svgs/close.svg';
import { stylesGlobalModal } from '@src/components/modal/stylesGlobalModal';
import { appColors } from '@src/utils/appColors';

type TypeDefaultModal = {
    children?: ReactNode,
    visibleStates: { visible: boolean, changeVisibleState: React.Dispatch<React.SetStateAction<boolean>> },
    backgroundModalColor?: string
    hasCloseIcon?: boolean
}

export default function SimpleModal({ children, visibleStates, hasCloseIcon = true, backgroundModalColor = appColors.white, }: TypeDefaultModal) {

    const animatedOpacity = useRef(new Animated.Value(0));

    useEffect(() => {
        if (visibleStates.visible) {
            Animated.sequence([
                Animated.timing(animatedOpacity.current, {
                    toValue: 1,
                    delay: 0,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visibleStates.visible]);

    function closeDrawerModal() {
        if (hasCloseIcon) {
            Animated.sequence([
                Animated.timing(animatedOpacity.current, {
                    toValue: 0,
                    delay: 0,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                visibleStates.changeVisibleState(!visibleStates.visible);
            });
        }

    }

    return (
        <Animated.View style={[stylesGlobalModal.container, { opacity: animatedOpacity.current }]}>
            <TouchableWithoutFeedback onPressIn={closeDrawerModal} style={stylesGlobalModal.backgroundTouchable}><View style={stylesGlobalModal.backgroundTouchable} /></TouchableWithoutFeedback>

            <Animated.View style={[{ backgroundColor: backgroundModalColor }, stylesGlobalModal.modalContainer]}>
                {hasCloseIcon &&
                    <TouchableOpacity onPressIn={closeDrawerModal}>
                        <CloseSvg width={23} height={23} />
                    </TouchableOpacity>
                }

                {children}
            </Animated.View>
        </Animated.View>
    );
}
