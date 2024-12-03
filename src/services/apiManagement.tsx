import { Alert } from '@src/components/alerts/alerts';
import { genericResponse } from '@src/services/user/genericTypes';
import { addElement } from '@src/store/features/instantiableElements/instantiableElements-slice';
import { globalStore } from '@src/store/globalStore';

export async function apiManagement(response: genericResponse) {

  if (response.messageSuccess) {
    globalStore.dispatch(addElement({ Element: Alert, props: { type: 'success', message: response.messageSuccess, duration: 3000 }, }))
  } else {
    for (let key in response.errors){
      globalStore.dispatch(addElement({ Element: Alert, props: { type: 'error', message: response.errors?.[key], duration: 3000 }, }))
    }
  }

  return response;
}
