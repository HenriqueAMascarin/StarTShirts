import { Animated, View } from 'react-native';
import React from 'react';
import LoadingSVG from '@src/assets/svgs/loading.svg';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import { stylesLoadingScreen } from '@src/components/suspense/loading/styles/stylesLoadingScreen';

export default function LoadingScreen() {
  const rotationOfLoadingSVGAnimatedValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotationOfLoadingSVGAnimatedValue, {
      toValue: 1,
      duration: 1700,
      useNativeDriver: false,
    }),
  ).start();

  const rotationAnimatedValue = rotationOfLoadingSVGAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={stylesLoadingScreen.container}>
      <Animated.View style={{ transform: [{ rotate: rotationAnimatedValue }] }}>
        <LoadingSVG width={150} height={149} />
      </Animated.View>

      <TextTitleH2 style={stylesLoadingScreen.text}>Loading...</TextTitleH2>
    </View>
  );
}
