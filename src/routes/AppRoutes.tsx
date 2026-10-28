import {
  NavigationContainer,
} from '@react-navigation/native';
import { appColors } from '@src/utils/appColors';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import LoginIndex from '@src/modules/FirstSteps/Login/LoginIndex';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import HomeIndex from '@src/modules/InApp/Home/pages/HomeIndex';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderIndex from '@src/modules/InApp/components/header/HeaderIndex';
import ProductIndex from '@src/modules/InApp/Product/pages/ProductIndex';
import AccountIndex from '@src/modules/InApp/Account/pages/AccountIndex';
import WishlistIndex from '@src/modules/InApp/Wishlist/pages/WishlistIndex';
import CartIndex from '@src/modules/InApp/Cart/pages/CartIndex';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationTabBar from '@src/modules/InApp/components/navigation/tabBar/NavigationTabBar';
import MoreIndex from '@src/modules/InApp/More/pages/MoreIndex';

export type TypeSimpleRoutesList = {
  register: undefined;
  login: undefined;
  'request-reset': undefined;
  home: undefined;
  'home/wishlist': undefined;
  'home/cart': undefined;
  'home/purchases': undefined;
  'home/account': undefined;
  'home/more': undefined;
};

type TypeParamRoutesList = {
  'password-reset': { generatedUrl: string };
  'home/product': { uniqueId: string };
};

export type RootStackParamList = TypeParamRoutesList & TypeSimpleRoutesList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MyTabs = createBottomTabNavigator<RootStackParamList>();

export type TypePropsRoutesNavigate = BottomTabNavigationProp<RootStackParamList>['navigate'];

type AppRoutesType = { initialRouteName: keyof RootStackParamList };

export default function AppRoutes({ initialRouteName }: AppRoutesType) {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <MyTabs.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          header: (props) => <HeaderIndex {...props} insets={insets} />,
          sceneStyle: { backgroundColor: appColors.white },
        }}
        tabBar={NavigationTabBar}
      >
        <MyTabs.Group screenOptions={{ headerShown: false }}>
          <MyTabs.Screen name="register" component={RegisterIndex} />

          <MyTabs.Screen name="login" component={LoginIndex} />

          <MyTabs.Screen name="request-reset" component={ResetRequestIndex} />

          <MyTabs.Screen name="password-reset" component={PasswordResetIndex} />
        </MyTabs.Group>

        <MyTabs.Group
          screenLayout={(props) => {
            return (
              <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
                {props.children}
              </View>
            );
          }}
        >
          <MyTabs.Screen name="home" component={HomeIndex} />

          <MyTabs.Screen name="home/product" component={ProductIndex} />

          <MyTabs.Screen name="home/wishlist" component={WishlistIndex} />

          <MyTabs.Screen name="home/cart" component={CartIndex} />

          <MyTabs.Screen name="home/purchases" component={HomeIndex} />

          <MyTabs.Screen name="home/account" component={AccountIndex} />

          <MyTabs.Screen name="home/more" component={MoreIndex} />
        </MyTabs.Group>
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}
