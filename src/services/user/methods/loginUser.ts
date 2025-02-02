import { userObjectType } from "@src/services/user/types/genericTypes";
import { genericStatus } from "@src/services/genericTypes";
import { getUsers } from "@src/services/user/methods/getUsers";
import { apiManagement } from "@src/services/apiManagement";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keysLocalStorage } from "@src/utils/localStorage";

type LoginUserType = {
  password: string;
  email: string;
  rememberMe?: boolean;
};

export const loginUser = async ({
  password,
  email,
  rememberMe = true,
}: LoginUserType) => {
  const userResponseAll = await getUsers({});

  let status: genericStatus = { messageSuccess: null };

  let data: userObjectType | null = null;

  const hasUser =
    userResponseAll != null
      ? userResponseAll.find((user) => user.email == email)
      : null;

  if (hasUser) {
    if (password == hasUser.password) {
      // Pick the new logged user
      const jsonValueUser = JSON.stringify({ password, email, rememberMe });

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
