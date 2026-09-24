import React from 'react';
import { View } from 'react-native';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { stylesNavigationTabBar } from '@src/modules/InApp/components/navigation/tabBar/styles/stylesNavigationTabBar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import NavigationItems from '@src/modules/InApp/components/navigation/items/NavigationItems';
import { appColors } from '@src/utils/appColors';

export default function NavigationTabBar({ state }: BottomTabBarProps) {
  return (
    <View style={stylesNavigationTabBar.container}>
      <PaddingContainer>
        <View style={stylesNavigationTabBar.itemsContainer}>
          <NavigationItems stateRoutes={state} />
        </View>
      </PaddingContainer>
    </View>
  );
}
