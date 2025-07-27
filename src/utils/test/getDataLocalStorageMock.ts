import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { keysLocalStorage } from '@src/utils/localStorage';

type TypeGetLocalStorageMock = {
  keyStorage: keyof typeof keysLocalStorage;
};

export default async function getDataLocalStorageMock({ keyStorage }: TypeGetLocalStorageMock) {
  const rawAsyncStorageData = await AsyncStorageMock.getItem(keysLocalStorage[keyStorage]);

  const dataRaw = rawAsyncStorageData != null ? JSON.parse(rawAsyncStorageData) : null;

  return dataRaw;
}
