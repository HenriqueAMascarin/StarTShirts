import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
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

describe('ResetRequestIndex', () => {

    it('Should have a USER REGISTERED', async () => {

        const userArray = [responseUserMock];

        await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

        const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

        expect(dataRawUsers).toEqual(userArray);

    });

    it('Should do a RESET REQUEST', async () => {

        render(<NavigationContainer><ResetRequestIndex /></NavigationContainer>);

        const elementButton = screen.getByText('Send e-mail');

        const user = userEvent.setup();

        const emailInput = screen.getByTestId('emailInput');

        await user.type(emailInput, responseRequestMock.email);

        await user.press(elementButton);

        const dataResetRequests = await getDataLocalStorageMock({keyStorage: 'resetRequestsKey'});

        expect(dataResetRequests[0]).toEqual(responseRequestMock);

    });
});
