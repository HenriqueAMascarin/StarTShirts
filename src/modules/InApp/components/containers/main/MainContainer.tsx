import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { headerHeight } from '@src/modules/InApp/components/header/HeaderIndex';
import FooterIndex from '@src/modules/InApp/components/footer/FooterIndex';
import { stylesMainContainer } from '@src/modules/InApp/components/containers/main/styles/stylesMainContainer';

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <ScrollView
      contentContainerStyle={[stylesMainContainer.contentContainer, { paddingTop: headerHeight }]}
      style={stylesMainContainer.container}
      testID="mainContainerScrollTestId"
    >
      <View style={stylesMainContainer.childrenContainer}>{children}</View>

      <FooterIndex />
    </ScrollView>
  );
}
