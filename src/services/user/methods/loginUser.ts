import { userObjectType } from "@src/services/user/types/genericTypes";
import { genericStatus } from "@src/services/genericTypes";
import { getUsers } from "@src/services/user/methods/getUsers";
import { apiManagement } from "@src/services/apiManagement";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keysLocalStorage } from "@src/utils/localStorage";

type LoginUserType = {
  password: string;
  email: string;
  rememberMe: boolean;
};

export const loginUser = async (userData: LoginUserType) => {
  const allUsersData = await getUsers();

  let status: genericStatus = { messageSuccess: null };

  let data: userObjectType | null = null;

  const hasUser =
    allUsersData != null
      ? allUsersData.find((user) => user.email == userData.email)
      : null;

  if (hasUser) {
    if (userData.password == hasUser.password) {
      // Pick the new logged user
      const jsonValueUser = JSON.stringify(hasUser);

      // Now is set the new logged user
      await AsyncStorage.setItem(keysLocalStorage.loggedUserKey, jsonValueUser);

      status = { messageSuccess: "User logged in!" };

      data = hasUser;
    } else {
      status = { ...status, errors: { email: "Incorrect password" } };
    }
  } else {
    status = { ...status, errors: { email: "User doesn't exist" } };
  }

  await apiManagement(status);

  return { ...status, data: data };
};
