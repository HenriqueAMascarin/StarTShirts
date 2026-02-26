import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function signOutAccount(navigateFn: Function) {
  await AsyncStorage.removeItem(keysLocalStorage.loggedUserKey);

  navigateFn('login');
}
