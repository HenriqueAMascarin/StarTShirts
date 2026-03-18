import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import ModalChangeEmail from '@src/modules/InApp/Account/components/changeEmail/ModalChangeEmail';
import { responseUserMock } from '@src/utils/test/responseUserMock';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const changeEmailPayload = {
  ...responseUserMock,
  email: 'newTestEmail@gmail.com',
};

describe('ModalChangeEmail', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseUserMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should CHANGE EMAIL', async () => {
    render(
      <ModalChangeEmail
        userId={changeEmailPayload.id}
        statesSimpleModal={{
          simpleModalState: true,
          changeSimpleModalState: () => {},
        }}
      />,
    );

    const elementButton = screen.getByTestId('changeEmailBtn');

    const newEmailInput = screen.getByTestId('newEmailInput');

    const confirmEmailInput = screen.getByTestId('confirmEmailInput');

    const currentPasswordInput = screen.getByTestId('currentPasswordInput');

    const user = userEvent.setup();

    await user.type(newEmailInput, changeEmailPayload.email);

    await user.type(confirmEmailInput, changeEmailPayload.email);

    await user.type(currentPasswordInput, changeEmailPayload.password);

    await user.press(elementButton);

    const dataResetRequests = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataResetRequests[0]).toEqual(changeEmailPayload);
  });
});
