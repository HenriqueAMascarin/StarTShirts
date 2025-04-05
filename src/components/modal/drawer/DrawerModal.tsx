import { Animated, FlexStyle, TouchableOpacity, View } from 'react-native';
import React, { ReactNode, useEffect, useRef } from 'react';
import { stylesGlobalModal } from '@src/components/modal/stylesGlobalModal';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import CloseSvg from '@src/assets/svgs/close.svg';

type TypeDefaultModal = {
    children?: ReactNode,
    visibleStates: { visible: boolean, changeVisibleState: React.Dispatch<React.SetStateAction<boolean>> }
    title: string,
    position: Extract<FlexStyle['justifyContent'], 'flex-start' | 'flex-end'>
}

export function DrawerModal({ children, visibleStates, title, position }: TypeDefaultModal) {

    const animatedOpacity = useRef(new Animated.Value(0));

    const transformInitialPos = position === 'flex-end' ? 200 : -200;

    const animatedTransform = useRef(new Animated.Value(transformInitialPos));

    useEffect(() => {
        if (visibleStates.visible) {
            Animated.sequence([
                Animated.timing(animatedOpacity.current, {
                    toValue: 1,
                    delay: 4,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedTransform.current, {
                    toValue: 0,
                    delay: 4,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visibleStates.visible]);

    function closeDrawerModal() {
        Animated.sequence([
            Animated.timing(animatedTransform.current, {
                toValue: transformInitialPos,
                delay: 4,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(animatedOpacity.current, {
                toValue: 0,
                delay: 50,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
            visibleStates.changeVisibleState(!visibleStates.visible);
        });
    }

    return (
        <Animated.View style={[stylesGlobalModal.container, { opacity: animatedOpacity.current, justifyContent: position, cursor: visibleStates.visible ? 'auto' : undefined }]}>
            <Animated.View style={[stylesGlobalModal.drawerContainer, { transform: [{ translateX: animatedTransform.current }] }]}>
                <View style={[stylesGlobalModal.titleContainer, stylesGlobalModal.bottomLine, stylesGlobalModal.headerPaddingContainer]}>
                    <TouchableOpacity onPressIn={closeDrawerModal}>
                        <CloseSvg width={23} height={23} />
                    </TouchableOpacity>

                    <TextTitleH2>
                        {title}
                    </TextTitleH2>
                </View>

                {children}
            </Animated.View>
        </Animated.View>
    );
}
