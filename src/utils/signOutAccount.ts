import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypePropsRoutesNavigate } from '@src/routes/AppRoutes';

export async function signOutAccount(navigateFn: TypePropsRoutesNavigate) {
  await AsyncStorage.removeItem(keysLocalStorage.loggedUserKey);

  navigateFn('login');
}
