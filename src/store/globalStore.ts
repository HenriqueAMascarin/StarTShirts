import { configureStore } from '@reduxjs/toolkit';
import { alertsInstantiableReducer } from '@src/store/features/alertsInstantiable/alertsInstantiable-slice';

export const globalStore = configureStore({
  reducer: { alertsInstantiable: alertsInstantiableReducer },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
    serializableCheck: false,
   })
});

export type RootState = ReturnType<typeof globalStore.getState>;
