import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserLoggedType } from '@src/services/user/login/types/genericTypes';

export const getLoggedUser = async (): Promise<UserLoggedType> => {
  const loggedUserResponse = await AsyncStorage.getItem(keysLocalStorage.loggedUserKey);

  let loggedUserData: UserLoggedType = loggedUserResponse ? JSON.parse(loggedUserResponse) : [];

  return loggedUserData;
};
