import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import { NavigationContainer } from '@react-navigation/native';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/routes/AppRoutes';
import HomeIndex from '@src/modules/InApp/Home/pages/HomeIndex';

// min 8 characters for password (see the schema of register)
const responseMock = {
  firstName: 'Henrique',
  lastName: 'Test',
  email: 'test@gmail.com',
  password: 'testPassword',
  id: 0,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

describe('RegisterIndex', () => {
  it('Should do a REGISTRATION', async () => {
    const mockFormData = {
      ...responseMock,
      id: undefined,
      confirmPassword: responseMock.password,
    };

    render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'register'}>
          <Stack.Screen name="register" component={RegisterIndex} />

          <Stack.Screen name="home" component={HomeIndex} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    const elementButton = screen.getByTestId('registerButton');

    const user = userEvent.setup();

    const firstNameInput = screen.getByTestId('firstNameInput');
    const lastNameInput = screen.getByTestId('lastNameInput');
    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');
    const confirmPasswordInput = screen.getByTestId('confirmPasswordInput');

    await user.type(firstNameInput, mockFormData.firstName);
    await user.type(lastNameInput, mockFormData.lastName);
    await user.type(emailInput, mockFormData.email);
    await user.type(passwordInput, mockFormData.password);
    await user.type(confirmPasswordInput, mockFormData.confirmPassword);

    await user.press(elementButton);

    const dataUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataUsers[0]).toEqual(responseMock);
  });

  it('Should LOGIN after registration', async () => {
    const responseLoggedUser = { ...responseMock, rememberMe: true };

    const dataLoggedUser = await getDataLocalStorageMock({ keyStorage: 'loggedUserKey' });

    expect(dataLoggedUser).toEqual(responseLoggedUser);
  });
});
