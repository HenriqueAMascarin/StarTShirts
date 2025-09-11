import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import LoginIndex from '@src/modules/FirstSteps/Login/LoginIndex';
import { keysLocalStorage } from '@src/utils/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/routes/AppRoutes';
import HomeIndex from '@src/modules/InApp/Home/pages/HomeIndex';

const responseMock = {
  firstName: 'Henrique',
  lastName: 'Test',
  email: 'test@gmail.com',
  password: '123',
  id: 0,
  rememberMe: true,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

describe('LoginIndex', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should do a LOGIN', async () => {
    render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'login'}>
          <Stack.Screen name="login" component={LoginIndex} />

          <Stack.Screen name="home" component={HomeIndex} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    const elementButton = screen.getByText('Login');

    const user = userEvent.setup();

    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');

    await user.type(emailInput, responseMock.email);
    await user.type(passwordInput, responseMock.password);

    await user.press(elementButton);

    const dataLoggedUser = await getDataLocalStorageMock({ keyStorage: 'loggedUserKey' });

    expect(dataLoggedUser).toEqual(responseMock);
  });
});
