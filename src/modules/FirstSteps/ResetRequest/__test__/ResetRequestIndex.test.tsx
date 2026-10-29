import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import ResetRequestIndex from '@src/modules/FirstSteps/ResetRequest/ResetRequestIndex';
import { keysLocalStorage } from '@src/utils/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import { RootStackParamList } from '@src/routes/AppRoutes';
import PasswordResetIndex from '@src/modules/FirstSteps/PasswordReset/PasswordResetIndex';
import { responseUserMock } from '@src/utils/test/responseUserMock';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const responseRequestMock = {
  email: responseUserMock.email,
  generatedUrl: 'STPRURL0',
  userId: responseUserMock.id,
};

const MyTabs = createBottomTabNavigator<RootStackParamList>();

describe('ResetRequestIndex', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseUserMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should do a RESET REQUEST', async () => {
    render(
      <NavigationContainer>
        <MyTabs.Navigator initialRouteName={'request-reset'}>
          <MyTabs.Screen name="request-reset" component={ResetRequestIndex} />

          <MyTabs.Screen name="password-reset" component={PasswordResetIndex} />
        </MyTabs.Navigator>
      </NavigationContainer>,
    );

    const elementButton = screen.getByText('Send e-mail');

    const user = userEvent.setup();

    const emailInput = screen.getByTestId('emailInput');

    await user.type(emailInput, responseRequestMock.email);

    await user.press(elementButton);

    const dataResetRequests = await getDataLocalStorageMock({ keyStorage: 'resetRequestsKey' });

    expect(dataResetRequests[0]).toEqual(responseRequestMock);
  });
});
