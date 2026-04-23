import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userResponseObjectType } from '@src/services/user/types/genericTypes';

type typeUserData = userResponseObjectType[];

type getUsersType = { id?: number };

export const getUsers = async ({ id }: getUsersType): Promise<typeUserData> => {
  const usersResponse = await AsyncStorage.getItem(keysLocalStorage.usersKey);

  let usersData: typeUserData = usersResponse ? JSON.parse(usersResponse) : [];

  if (id) {
    const itemFindById = usersData.find((item) => item.id === id);

    if (itemFindById) {
      usersData = [itemFindById];
    }
  }

  return usersData;
};
