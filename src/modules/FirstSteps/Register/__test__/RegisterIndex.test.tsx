import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { keysLocalStorage } from '@src/utils/localStorage';
import { NavigationContainer } from '@react-navigation/native';

const responseMock = {
    firstName: 'Henrique',
    lastName: 'Test',
    email: 'test@gmail.com',
    password: '123',
    id: 0,
};

describe('RegisterIndex', () => {

    it('Should do a simple REGISTRATION', async () => {

        const mockFormData = {
            ...responseMock,
            id: undefined,
            confirmPassword: '123',
        };

        render(<NavigationContainer><RegisterIndex /></NavigationContainer>);

        const elementButton = screen.getByText('Create account');

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

        const rawUsers = await AsyncStorageMock.getItem(keysLocalStorage.usersKey);

        const dataUsers = rawUsers != null ? JSON.parse(rawUsers) : null;

        expect(dataUsers[0]).toEqual(responseMock);

    });

    it('Should LOGIN after registration', async () => {

        const responseLoggedUser = { ...responseMock, rememberMe: true };

        const rawLoggedUser = await AsyncStorageMock.getItem(keysLocalStorage.loggedUserKey);

        const dataLoggedUser = rawLoggedUser != null ? JSON.parse(rawLoggedUser) : null;

        expect(dataLoggedUser).toEqual(responseLoggedUser);

    });


});
