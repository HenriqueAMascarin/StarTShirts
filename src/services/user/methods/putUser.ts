import AsyncStorage from "@react-native-async-storage/async-storage";
import { genericStatus } from "@src/services/genericTypes";
import { keysLocalStorage } from "@src/utils/localStorage";
import { apiManagement } from "@src/services/apiManagement";
import { getUsers } from "@src/services/user/methods/getUsers";
import { userObjectType, userResponseObjectType } from "@src/services/user/types/genericTypes";

type putUserType = {
    [key in keyof userObjectType]?: userObjectType[key];
};

export const putUser = async (userData: putUserType) => {
  const userResponseAll = await getUsers({});

  let userDataById = userResponseAll.find((user) => user.id == userData.id);

  let status: genericStatus = { messageSuccess: null };

  let data: userResponseObjectType | null = null;

  if (userDataById) {
    let newUserEditedData =  { ...userDataById, ...userData }

    const indexUserById = userResponseAll.findIndex((user) => user.id = newUserEditedData.id);

    userResponseAll[indexUserById] = newUserEditedData;

    const arrayToConvertJson = userResponseAll;

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.usersKey, jsonValue);

    status.messageSuccess = "User has been edited!";

    data = userDataById;
  } else {
    status = { ...status, errors: { email: "User doesn't exist" } };
  }

  await apiManagement(status);

  return { ...status, data: data };
};
