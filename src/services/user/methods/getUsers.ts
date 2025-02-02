import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userObjectType } from '@src/services/user/types/genericTypes';

type typeUserData = userObjectType[] | null;

export const getUsers = async (): Promise<typeUserData> => {
  const userResponse = await AsyncStorage.getItem(keysLocalStorage.usersKey);

  const userData: typeUserData = userResponse ? JSON.parse(userResponse) : null;

  return userData;
};
