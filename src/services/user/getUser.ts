import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userObject } from '@src/services/user/genericTypes';

type typeUserData = userObject[];

export const getUser = async (): Promise<typeUserData> => {
  const userResponse = await AsyncStorage.getItem(keysLocalStorage.userKey);

  const userData: typeUserData = userResponse ? JSON.parse(userResponse) : [];

  return userData;
};
