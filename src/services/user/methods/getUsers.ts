import { keysLocalStorage } from "@src/utils/localStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userResponseObjectType } from "@src/services/user/types/genericTypes";

type typeUserData = userResponseObjectType[];

export type getUsersByIdType = { id?: number };

export const getUsers = async ({ id }: getUsersByIdType): Promise<typeUserData> => {
  const usersResponse = await AsyncStorage.getItem(keysLocalStorage.usersKey);

  let usersData: typeUserData = usersResponse ? JSON.parse(usersResponse) : [];

  if (id) {
    const findById = usersData.find((request) => request.id == id);

    if (findById) {
      usersData = [findById];
    }
  }

  return usersData;
};
