import { userObjectType, userResponseObjectType } from '@src/services/user/types/genericTypes';
import { genericStatus } from '@src/services/genericTypes';
import { getUsers } from '@src/services/user/methods/getUsers';
import { apiManagement } from '@src/services/apiManagement';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { keysLocalStorage } from '@src/utils/localStorage';

type LoginUserType = {
  password: string;
  email: string;
  rememberMe?: boolean;
};

interface payloadLoginType extends userResponseObjectType {
  rememberMe?: boolean;
}

export async function setLoginData({
  email,
  id,
  password,
  firstName,
  lastName,
  rememberMe = true,
}: payloadLoginType) {
  const payloadLoginData = { email, id, password, rememberMe, firstName, lastName };

  // Pick the new logged user
  const jsonValueUser = JSON.stringify(payloadLoginData);

  // Now is set the new logged user
  await AsyncStorage.setItem(keysLocalStorage.loggedUserKey, jsonValueUser);
}

export const postLoginUser = async ({ password, email, rememberMe = true }: LoginUserType) => {
  const userResponseAll = await getUsers({});

  let status: genericStatus = { messageSuccess: null };

  let data: userObjectType | null = null;

  const hasUser = userResponseAll.find((user) => user.email === email);

  if (hasUser && hasUser.id !== undefined) {
    if (password === hasUser.password) {
      await setLoginData({
        password,
        email,
        firstName: hasUser.firstName,
        lastName: hasUser.lastName,
        id: hasUser.id,
        rememberMe,
      });

      status = { messageSuccess: 'User logged in!' };

      data = hasUser;
    } else {
      status = { ...status, errors: { email: 'Incorrect password' } };
    }
  } else {
    status = { ...status, errors: { email: "User doesn't exist" } };
  }

  await apiManagement(status);

  return { ...status, data: data };
};
