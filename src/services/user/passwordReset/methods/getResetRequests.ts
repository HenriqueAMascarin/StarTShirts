import AsyncStorage from "@react-native-async-storage/async-storage";
import { keysLocalStorage } from "@src/utils/localStorage";
import { resetRequestsDataType } from "@src/services/user/passwordReset/types/genericTypes";

export const getResetRequests = async (generatedUrl?: string) => {
  const resetRequestsResponse = await AsyncStorage.getItem(
    keysLocalStorage.resetRequestsKey
  );

  let resetRequestsData: resetRequestsDataType = resetRequestsResponse
    ? JSON.parse(resetRequestsResponse)
    : [];

  if (
    generatedUrl
  ) {
    const findByGeneratedUrl = resetRequestsData.find(
      (request) => request.generatedUrl == generatedUrl
    );

    if (findByGeneratedUrl) {
      resetRequestsData = [findByGeneratedUrl];
    }
  }

  return resetRequestsData;
};
