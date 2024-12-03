import { Alert } from '@src/components/alerts/alerts';
import { genericResponse } from '@src/services/user/genericTypes';
import { addElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { globalStore } from '@src/store/globalStore';
import { randomValue } from '@src/utils/randomValue';

export async function apiManagement(response: genericResponse) {

  const randomKey = randomValue();

  if (response.messageSuccess) {
    globalStore.dispatch(addElement({ Element: Alert, props: { type: 'success', message: response.messageSuccess }, keyItem: randomKey }))
  } else {
    for (let key in response.errors) {
      globalStore.dispatch(addElement({ Element: Alert, props: { type: 'error', message: response.errors?.[key]}, keyItem: randomKey }))
    }
  }

  return response;
}
