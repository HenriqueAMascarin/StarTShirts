import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@src/modules/Welcome/Index';
import { appColors } from '@src/utils/styleVariables';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: appColors.white
                    }
                }}>
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}