import PaddingContainer from '@src/components/containers/PaddingContainer';
import TextDefault from '@src/components/texts/default/TextDefault';
import React from 'react';
import { View } from 'react-native';
import { stylesFooterIndex } from '@src/modules/InApp/components/footer/styles/stylesFooterIndex';
import StarSVG from '@src/assets/svgs/star.svg';

export default function FooterIndex() {
  return (
    <View style={stylesFooterIndex.container}>
      <PaddingContainer>
        <View style={stylesFooterIndex.logoContainer}>
          <StarSVG width={'103'} height={'93'} />

          <TextDefault style={stylesFooterIndex.logoText}>Star T-Shirts</TextDefault>
        </View>
      </PaddingContainer>
    </View>
  );
}
