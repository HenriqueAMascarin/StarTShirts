import { Animated, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { ReactNode, useEffect, useRef } from 'react';
import CloseSvg from '@src/assets/svgs/close.svg';
import { stylesGlobalModal } from '@src/components/modal/stylesGlobalModal';
import { appColors } from '@src/utils/appColors';
import { stylesSimpleModal } from '@src/components/modal/simple/styles/stylesSimpleModal';

type TypeDefaultModal = {
  children?: ReactNode;
  visibleStates: {
    visible: boolean;
    changeVisibleState: React.Dispatch<React.SetStateAction<boolean>>;
  };
  backgroundModalColor?: string;
  hasCloseIcon?: boolean;
};

function ContentSimpleModal({
  children,
  visibleStates,
  hasCloseIcon,
  backgroundModalColor,
}: TypeDefaultModal) {
  const animatedOpacity = useRef(new Animated.Value(0));

  useEffect(() => {
    if (visibleStates.visible) {
      Animated.sequence([
        Animated.timing(animatedOpacity.current, {
          toValue: 1,
          delay: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visibleStates.visible]);

  function closeSimpleModal() {
    Animated.sequence([
      Animated.timing(animatedOpacity.current, {
        toValue: 0,
        delay: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      visibleStates.changeVisibleState(!visibleStates.visible);
    });
  }

  return (
    <Animated.View style={[stylesGlobalModal.container, { opacity: animatedOpacity.current }]}>
      <TouchableWithoutFeedback
        onPressIn={closeSimpleModal}
        style={stylesGlobalModal.backgroundTouchable}
      >
        <View style={stylesGlobalModal.backgroundTouchable} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          stylesSimpleModal.modalContainer,
          stylesGlobalModal.modalContainerShadow,
          { backgroundColor: backgroundModalColor, opacity: animatedOpacity.current },
        ]}
      >
        {hasCloseIcon && (
          <TouchableOpacity onPressIn={closeSimpleModal} style={stylesSimpleModal.closeBtn}>
            <CloseSvg width={23} height={23} />
          </TouchableOpacity>
        )}

        {children}
      </Animated.View>
    </Animated.View>
  );
}

export default function SimpleModal({
  children,
  visibleStates,
  hasCloseIcon = true,
  backgroundModalColor = appColors.white,
}: TypeDefaultModal) {
  return (
    <>
      {visibleStates.visible && (
        <ContentSimpleModal {...{ children, visibleStates, hasCloseIcon, backgroundModalColor }} />
      )}
    </>
  );
}
