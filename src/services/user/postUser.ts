import AsyncStorage from '@react-native-async-storage/async-storage';
import {genericResponse, userObject} from '@src/services/user/genericTypes';
import {getUser} from '@src/services/user/getUser';
import {keysLocalStorage} from '@src/utils/localStorage';
import {apiManagement} from '@src/services/apiManagement';

export const postUser = async (userData: userObject) => {
  const allUsersData = await getUser();

  let response: genericResponse = {messageSuccess: null};

  if (allUsersData.find(user => user.email == userData.email)) {
    response = {...response, errors: {email: 'E-mail already exists'}};
  } else {
    const jsonValue = JSON.stringify([...allUsersData, userData]);

    await AsyncStorage.setItem(keysLocalStorage.userKey, jsonValue);

    response.messageSuccess = 'Account has been created!';
  }

  await apiManagement(response);
};
