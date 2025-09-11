import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import { keysLocalStorage } from '@src/utils/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeIndex from '@src/modules/InApp/Home/pages/HomeIndex';

const responseUserMock = {
  firstName: 'Henrique',
  lastName: 'Test',
  email: 'test@gmail.com',
  password: '123',
  id: 0,
  rememberMe: true,
};

const responseRequestMock = {
  email: responseUserMock.email,
  generatedUrl: 'STPRURL0',
  userId: responseUserMock.id,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

describe('PasswordResetIndex', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseUserMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should have a PASSWORD REQUEST', async () => {
    const requestArray = [responseRequestMock];

    await AsyncStorageMock.setItem(keysLocalStorage.resetRequestsKey, JSON.stringify(requestArray));

    const dataRawRequests = await getDataLocalStorageMock({ keyStorage: 'resetRequestsKey' });

    expect(dataRawRequests).toEqual(requestArray);
  });

  it('Should do a EDIT THE PASSWORD', async () => {
    const editPayload = { password: 'passwordEditNew' };

    const responseEditMock = { ...responseUserMock, ...editPayload };

    render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'password-reset'}>
          <Stack.Screen
            name="password-reset"
            component={PasswordResetIndex}
            initialParams={{ generatedUrl: responseRequestMock.generatedUrl }}
          />

          <Stack.Screen name="home" component={HomeIndex} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    const elementButton = screen.getByTestId('resetBtn');

    const user = userEvent.setup();

    const passwordInput = screen.getByTestId('passwordInput');
    const confirmPasswordInput = screen.getByTestId('confirmPasswordInput');

    await user.type(passwordInput, responseEditMock.password);
    await user.type(confirmPasswordInput, responseEditMock.password);

    await user.press(elementButton);

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers[0]).toEqual(responseEditMock);
  });
});
