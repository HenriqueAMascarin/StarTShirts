import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '@src/utils/styleVariables';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import LoginIndex from '@src/modules/FirstSteps/Login/LoginIndex';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import HomeIndex from '@src/modules/Home/HomeIndex';

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

export default function AppRoutes() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="register"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: appColors.white,
            flexGrow: 1
          },
          animationTypeForReplace: "push"
        }}>

        <Stack.Group>
          <Stack.Screen name="register" component={RegisterIndex} />
          <Stack.Screen name="login" component={LoginIndex} />
          <Stack.Screen name="request-reset" component={ResetRequestIndex} />
          <Stack.Screen name="password-reset" component={PasswordResetIndex} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name='home' component={HomeIndex}/>
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  )
}