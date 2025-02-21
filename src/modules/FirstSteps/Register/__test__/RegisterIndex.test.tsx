import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { keysLocalStorage } from '@src/utils/localStorage';

describe('RegisterIndex', () => {
    it('the simple registration', async () => {
        const response = {
            firstName: 'Henrique',
            lastName: 'Test',
            email: 'test@gmail.com',
            password: '123',
            id: 0,
        };

        const mockFormData = {
            ...response,
            id: undefined,
            confirmPassword: '123',
        };

        render(<NavigationContainer><RegisterIndex /></NavigationContainer>);

        const elementButton = screen.getByText('Create account');

        const user = userEvent.setup();

        const firstNameInput =  screen.getByTestId('firstNameInput');
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

        const rawUsers = await AsyncStorage.getItem(keysLocalStorage.usersKey);

        const dataUsers = rawUsers != null ? JSON.parse(rawUsers) : null;

        expect(dataUsers[0]).toEqual(response);
    });

});
