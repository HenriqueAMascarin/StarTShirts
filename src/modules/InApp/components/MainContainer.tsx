import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { headerHeight } from '@src/modules/InApp/components/header/HeaderIndex';

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <View style={{ marginTop: headerHeight }}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
}
