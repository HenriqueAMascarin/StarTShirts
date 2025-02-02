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

  if(generatedUrl){
    resetRequestsData.find((request) => request.generatedUrl == generatedUrl);
  }

  return resetRequestsData;
};
