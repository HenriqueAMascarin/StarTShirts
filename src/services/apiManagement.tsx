import { SuccessAlert } from '@src/components/alerts/alerts';
import { genericResponse } from '@src/services/user/genericTypes';
import { addElement } from '@src/store/features/instantiableElements/instantiableElements-slice';
import { globalStore } from '@src/store/globalStore';

export async function apiManagement(response: genericResponse) {
  globalStore.dispatch(addElement({ Element: SuccessAlert, props: {message: "User created with success!", duration: 3000},  }))

  return response;
}
