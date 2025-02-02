import AsyncStorage from "@react-native-async-storage/async-storage";
import { genericStatus } from "@src/services/genericTypes";
import { getUsers } from "@src/services/user/methods/getUsers";
import { keysLocalStorage } from "@src/utils/localStorage";
import { apiManagement } from "@src/services/apiManagement";
import { getResetRequests } from "@src/services/user/passwordReset/methods/getResetRequests";
import { resetRequestsDataObjectType } from "@src/services/user/passwordReset/types/genericTypes";

type postResetRequestType = {
  email: string;
};

export const postResetRequests = async (emailData: postResetRequestType) => {
  const allUsersData = await getUsers();

  let status: genericStatus = { messageSuccess: null };

  let data: resetRequestsDataObjectType | null = null;

  const existentUserData = allUsersData?.find((user) => user.email == emailData.email);

  if (existentUserData) {
    let resetRequestsData = await getResetRequests();

    const generatedUrl = "STEMURL" + (resetRequestsData?.length ?? 1);

    const newRequestData = {
      email: emailData.email,
      generatedUrl: generatedUrl,
      userId: existentUserData.id
    };

    const arrayToConvertJson = resetRequestsData
      ? [...resetRequestsData, newRequestData]
      : [newRequestData];

    const jsonValue = JSON.stringify(arrayToConvertJson);

    await AsyncStorage.setItem(keysLocalStorage.resetRequestsKey, jsonValue);

    status.messageSuccess = "E-mail exists!";

    data = newRequestData;
  } else {
    status = { ...status, errors: { email: "E-mail doesn't exists" } };
  }

  await apiManagement(status);

  return { ...status, data: data };
};
