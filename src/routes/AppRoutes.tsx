import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '@src/utils/appColors';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import LoginIndex from '@src/modules/FirstSteps/Login/LoginIndex';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import HomeIndex from '@src/modules/InApp/Home/HomeIndex';
import React from 'react';
import HeaderIndex from '@src/modules/InApp/Home/components/Header/HeaderIndex';

export type RootStackParamList = {
  register: undefined,
  login: undefined,
  'request-reset': undefined,
  'password-reset': { generatedUrl: string },

  home: undefined,
  wishList: undefined,
  cart: undefined,
  purchases: undefined,
  account: undefined,
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppRoutesType = { initialRouteName: keyof RootStackParamList };

export default function AppRoutes({ initialRouteName }: AppRoutesType) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          header: HeaderIndex,
          contentStyle: {
            backgroundColor: appColors.white,
          },
          animation: 'slide_from_right',
        }}>

        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="register" component={RegisterIndex} />
          <Stack.Screen name="login" component={LoginIndex} />
          <Stack.Screen name="request-reset" component={ResetRequestIndex} />
          <Stack.Screen name="password-reset" component={PasswordResetIndex} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="home" component={HomeIndex} />
          <Stack.Screen name="wishList" component={HomeIndex} />
          <Stack.Screen name="cart" component={HomeIndex} />
          <Stack.Screen name="purchases" component={HomeIndex} />
          <Stack.Screen name="account" component={HomeIndex} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
