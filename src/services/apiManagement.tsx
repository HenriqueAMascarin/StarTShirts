import { genericStatus } from '@src/services/genericTypes';
import { addElement } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';
import { globalStore } from '@src/store/globalStore';
import { randomValue } from '@src/utils/randomValue';

export async function apiManagement(response: genericStatus) {
  const randomKey = randomValue();

  if (response.messageSuccess) {
    globalStore.dispatch(
      addElement({
        props: {
          type: 'success',
          message: response.messageSuccess,
          methodApiName: response.methodApiName,
        },
        keyItem: randomKey,
      }),
    );
  } else {
    for (const key in response.errors) {
      globalStore.dispatch(
        addElement({
          props: {
            type: 'error',
            message: response.errors?.[key],
            methodApiName: response.methodApiName,
          },
          keyItem: randomKey,
        }),
      );
    }
  }
}
