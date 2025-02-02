import AsyncStorage from "@react-native-async-storage/async-storage";
import { userObjectType } from "@src/services/user/types/genericTypes";
import { genericStatus } from "@src/services/genericTypes";

import { getUsers } from "@src/services/user/methods/getUsers";
import { keysLocalStorage } from "@src/utils/localStorage";
import { apiManagement } from "@src/services/apiManagement";

export const postUser = async (userData: userObjectType) => {
  const allUsersData = await getUsers();

  let status: genericStatus = { messageSuccess: null };

  let data: userObjectType | null = null;

  if (allUsersData?.find((user) => user.email == userData.email)) {
    status = { ...status, errors: { email: "User already exists" } };
  } else {
    const newUserData = { ...userData, id: allUsersData?.length ?? 1 };

    const arrayToConvertJson = allUsersData
      ? [...allUsersData, newUserData]
      : [newUserData];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.usersKey, jsonValue);

    status.messageSuccess = "User has been created!";

    data = newUserData;
  }

  await apiManagement(status);

  return { ...status, data: data };
};
