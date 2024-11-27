import { configureStore } from '@reduxjs/toolkit';
import { instantiableElementsReducer } from '@src/store/features/instantiableElements/instantiableElements-slice';

export const globalStore = configureStore({
  reducer: { instantiableElements: instantiableElementsReducer }
});

export type RootState = ReturnType<typeof globalStore.getState>;
