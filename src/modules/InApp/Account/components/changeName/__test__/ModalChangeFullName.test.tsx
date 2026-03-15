import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import getDataLocalStorageMock from '@src/utils/test/getDataLocalStorageMock';
import ModalChangeFullName from '@src/modules/InApp/Account/components/changeName/ModalChangeFullName.tsx';
import { responseUserMock } from '@src/utils/test/responseUserMock';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const changeFullNamePayload = {
  ...responseUserMock,
  firstName: 'NewFirstName',
  lastName: 'NewLastName'
};

describe('ModalChangeEmail', () => {
  it('Should have a USER REGISTERED', async () => {
    const userArray = [responseUserMock];

    await AsyncStorageMock.setItem(keysLocalStorage.usersKey, JSON.stringify(userArray));

    const dataRawUsers = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataRawUsers).toEqual(userArray);
  });

  it('Should CHANGE FULL NAME', async () => {
    render(
      <ModalChangeFullName
        userId={changeFullNamePayload.id}
        statesSimpleModal={{
          simpleModalState: true,
          changeSimpleModalState: () => {},
        }}
      />,
    );

    const elementButton = screen.getByTestId('changeFullNameBtn');

    const newfirstNameInput = screen.getByTestId('newfirstNameInput');

    const newLastNameInput = screen.getByTestId('newLastNameInput');

    const currentPasswordInput = screen.getByTestId('currentPasswordInput');

    const user = userEvent.setup();

    await user.type(newfirstNameInput, changeFullNamePayload.firstName);

    await user.type(newLastNameInput, changeFullNamePayload.lastName);

    await user.type(currentPasswordInput, changeFullNamePayload.password);

    await user.press(elementButton);

    const dataResetRequests = await getDataLocalStorageMock({ keyStorage: 'usersKey' });

    expect(dataResetRequests[0]).toEqual(changeFullNamePayload);
  });
});
