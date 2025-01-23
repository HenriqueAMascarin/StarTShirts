import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '@src/utils/styleVariables';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import LoginIndex from '@src/modules/FirstSteps/Login/LoginIndex';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';


type RootStackParamList = {
  Register: undefined,
  Login: undefined,
  ResetRequest: undefined,
  PasswordReset: undefined,
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
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: appColors.white,
            flexGrow: 1,

          },
        }}>

        <Stack.Group>
          <Stack.Screen name="Register" component={RegisterIndex} />
          <Stack.Screen name="Login" component={LoginIndex} />
          <Stack.Screen name="ResetRequest" component={ResetRequestIndex} />
          <Stack.Screen name="PasswordReset" component={PasswordResetIndex} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  )
}