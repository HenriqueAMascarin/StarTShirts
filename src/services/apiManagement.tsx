import { AlertItem } from '@src/components/alert/components/AlertItem/AlertItem';
import { genericStatus } from '@src/services/genericTypes';
import { addElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { globalStore } from '@src/store/globalStore';
import { randomValue } from '@src/utils/randomValue';

export async function apiManagement(response: genericStatus) {

  const randomKey = randomValue();

  if (response.messageSuccess) {
    globalStore.dispatch(addElement(
      {
        Element: AlertItem,
        props: { type: 'success', message: response.messageSuccess },
        keyItem: randomKey,
      }
    ));
  } else {
    for (let key in response.errors) {
      globalStore.dispatch(addElement(
        {
          Element: AlertItem,
          props: { type: 'error', message: response.errors?.[key] },
          keyItem: randomKey,
        }
      ));
    }
  }
}
