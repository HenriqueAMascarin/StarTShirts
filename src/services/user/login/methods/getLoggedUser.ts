import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserLoggedType } from '@src/services/user/login/types/genericTypes';

export const getLoggedUser = async () => {
  const loggedUserResponse = await AsyncStorage.getItem(keysLocalStorage.loggedUserKey);

  let loggedUserData: UserLoggedType | null = loggedUserResponse ? JSON.parse(loggedUserResponse) : null;

  return loggedUserData;
};
