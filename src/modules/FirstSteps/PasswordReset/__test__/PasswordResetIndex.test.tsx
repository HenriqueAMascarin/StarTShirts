import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import PasswordResetIndex, { PropsPasswordResetIndex } from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import { keysLocalStorage } from '@src/utils/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';

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

describe('PasswordResetIndex', () => {

    it('Should have a USER REGISTERED', async () => {
        const userArray = [responseUserMock];

        await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

        const dataRawUsers = await getDataLocalStorageMock({keyStorage: 'usersKey'});

        expect(dataRawUsers).toEqual(userArray);
    });

    it('Should have a PASSWORD REQUEST', async () => {
        const requestArray = [responseRequestMock];

        await AsyncStorageMock.setItem(keysLocalStorage.resetRequestsKey, JSON.stringify(requestArray));

        const dataRawRequests = await getDataLocalStorageMock({keyStorage: 'resetRequestsKey'});

        expect(dataRawRequests).toEqual(requestArray);
    });

    it('Should do a EDIT THE PASSWORD', async () => {

        const editPayload = { password: 'passwordEditNew' };

        const responseEditMock = { ...responseUserMock, ...editPayload };

        const propsComponent: PropsPasswordResetIndex = {
            route: {
                name: 'password-reset',
                key: '0',
                params: { generatedUrl: responseRequestMock.generatedUrl },
            },
            navigation: {} as PropsPasswordResetIndex['navigation'],
        };

        render(<NavigationContainer><PasswordResetIndex route={propsComponent.route} navigation={propsComponent.navigation} /></NavigationContainer>);

        const elementButton = screen.getByTestId('resetBtn');

        const user = userEvent.setup();

        const passwordInput = screen.getByTestId('passwordInput');
        const confirmPasswordInput = screen.getByTestId('confirmPasswordInput');

        await user.type(passwordInput, responseEditMock.password);
        await user.type(confirmPasswordInput, responseEditMock.password);

        await user.press(elementButton);

        const dataRawUsers = await getDataLocalStorageMock({keyStorage: 'usersKey'});

        expect(dataRawUsers[0]).toEqual(responseEditMock);

    });
});
