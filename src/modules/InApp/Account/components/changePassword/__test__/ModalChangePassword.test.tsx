import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import ModalChangePassword from '@src/modules/InApp/Account/components/changePassword/ModalChangePassword.tsx';
import { responseUserMock } from '@src/utils/test/responseUserMock';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const changePasswordPayload = {
  ...responseUserMock,
  password: 'NewPassword123!',
};

describe('ModalChangePassword', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseUserMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should CHANGE PASSWORD', async () => {
    render(
      <ModalChangePassword
        userId={changePasswordPayload.id}
        statesSimpleModal={{
          simpleModalState: true,
          changeSimpleModalState: () => {},
        }}
      />,
    );

    const elementButton = screen.getByTestId('changePasswordBtn');

    const newPasswordInput = screen.getByTestId('newPasswordInput');

    const confirmPasswordInput = screen.getByTestId('confirmPasswordInput');

    const currentPasswordInput = screen.getByTestId('currentPasswordInput');

    const user = userEvent.setup();

    await user.type(newPasswordInput, changePasswordPayload.password);

    await user.type(confirmPasswordInput, changePasswordPayload.password);

    await user.type(currentPasswordInput, responseUserMock.password);

    await user.press(elementButton);

    const dataResetRequests = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataResetRequests[0]).toEqual(changePasswordPayload);
  });
});
