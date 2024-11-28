import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageWelcome from '@src/modules/Welcome/PageWelcome';
import { appColors } from '@src/utils/styleVariables';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="PageWelcome"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: appColors.white
                    }
                }}>
                <Stack.Screen name="PageWelcome" component={PageWelcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}