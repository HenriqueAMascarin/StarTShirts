import { NavigationContainer } from '@react-navigation/native';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  register: undefined;
  login: undefined;
  'request-reset': undefined;
  'password-reset': { generatedUrl: string };
  home: undefined;
  'home/product': { uniqueId: string };
  'home/wishlist': undefined;
  'home/cart': undefined;
  'home/purchases': undefined;
  'home/account': undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MyTabs = createBottomTabNavigator<RootStackParamList>();

type AppRoutesType = { initialRouteName: keyof RootStackParamList };

export default function AppRoutes({ initialRouteName }: AppRoutesType) {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <MyTabs.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          header: HeaderIndex,
          // contentStyle: {
          //   backgroundColor: appColors.white,
          // },
    
        }}
      >
        <MyTabs.Group screenOptions={{ headerShown: false }}>
          <MyTabs.Screen name="register" component={RegisterIndex} />

          <MyTabs.Screen name="login" component={LoginIndex} />

          <MyTabs.Screen name="request-reset" component={ResetRequestIndex} />

          <MyTabs.Screen name="password-reset" component={PasswordResetIndex} />
        </MyTabs.Group>

        <MyTabs.Group
          screenLayout={(props) => {
            return <View style={{ paddingTop: insets.top }}>{props.children}</View>;
          }}
        >
          <MyTabs.Screen name="home" component={HomeIndex} />

          <MyTabs.Screen name="home/product" component={ProductIndex} />

          <MyTabs.Screen name="home/wishlist" component={WishlistIndex} />

          <MyTabs.Screen name="home/cart" component={CartIndex} />

          <MyTabs.Screen name="home/purchases" component={HomeIndex} />

          <MyTabs.Screen name="home/account" component={AccountIndex} />
        </MyTabs.Group>
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}
