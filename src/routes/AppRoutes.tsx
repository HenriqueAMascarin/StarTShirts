import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '@src/utils/styleVariables';
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
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const inAppOptions = { header: HeaderIndex };

type AppRoutesType = {initialRouteName: keyof RootStackParamList};

export default function AppRoutes({initialRouteName}: AppRoutesType) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: appColors.white,
            flexGrow: 1,
          },
          animationTypeForReplace: 'push',
        }}>

        <Stack.Group>
          <Stack.Screen name="register" component={RegisterIndex} />
          <Stack.Screen name="login" component={LoginIndex} />
          <Stack.Screen name="request-reset" component={ResetRequestIndex} />
          <Stack.Screen name="password-reset" component={PasswordResetIndex} />
        </Stack.Group>

        <Stack.Group screenOptions={inAppOptions}>
          <Stack.Screen name="home" component={HomeIndex} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
