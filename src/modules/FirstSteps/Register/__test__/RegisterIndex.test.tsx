import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import { NavigationContainer } from '@react-navigation/native';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';

const responseMock = {
    firstName: 'Henrique',
    lastName: 'Test',
    email: 'test@gmail.com',
    password: '123',
    id: 0,
};

describe('RegisterIndex', () => {

    it('Should do a REGISTRATION', async () => {

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

        const dataUsers = await getDataLocalStorageMock({keyStorage: 'usersKey'});

        expect(dataUsers[0]).toEqual(responseMock);

    });

    it('Should LOGIN after registration', async () => {

        const responseLoggedUser = { ...responseMock, rememberMe: true };

        const dataLoggedUser = await getDataLocalStorageMock({ keyStorage: 'loggedUserKey' });

        expect(dataLoggedUser).toEqual(responseLoggedUser);

    });


});
