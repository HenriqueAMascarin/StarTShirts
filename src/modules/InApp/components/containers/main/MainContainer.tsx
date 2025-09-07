import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { headerHeight } from '@src/modules/InApp/components/header/HeaderIndex';
import FooterIndex from '@src/modules/InApp/components/footer/FooterIndex';
import { stylesMainContainer } from '@src/modules/InApp/components/containers/main/styles/stylesMainContainer';

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <View style={{ marginTop: headerHeight }}>
      <ScrollView style={stylesMainContainer.container}>
        {children}

        <FooterIndex />
      </ScrollView>
    </View>
  );
}
