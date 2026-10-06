import React from 'react';
import { View } from 'react-native';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { stylesNavigationTabBar } from '@src/modules/InApp/components/navigation/tabBar/styles/stylesNavigationTabBar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import NavigationItems from '@src/modules/InApp/components/navigation/items/NavigationItems';

export default function NavigationTabBar({ state, navigation, insets }: BottomTabBarProps) {
  const activeRoute = state?.routes?.[state?.index];

  const showTabBar = activeRoute?.name?.includes?.('home');

  return (
    <>
      {showTabBar && (
        <View style={[stylesNavigationTabBar.container, { bottom: insets.bottom }]}>
          <PaddingContainer>
            <View style={stylesNavigationTabBar.itemsContainer}>
              <NavigationItems stateRoutes={state} navigationState={navigation} />
            </View>
          </PaddingContainer>
        </View>
      )}
    </>
  );
}
