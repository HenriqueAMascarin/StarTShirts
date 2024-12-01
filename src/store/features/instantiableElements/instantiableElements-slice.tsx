import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { typeAlerts } from '@src/components/alerts/alerts';

type typeProps = Omit<typeAlerts, "onHideFn">;

export type typeElement = { Element: ({ message, onHideFn, duration }: typeAlerts) => React.ReactElement, props: typeProps };

const initialState: typeElement[] = [];

export const instantiableElementsSlice = createSlice({
  name: 'instiableElements',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<typeElement>) => {
      state.push(action.payload);
    },
    removeElement: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addElement, removeElement } = instantiableElementsSlice.actions;
export const instantiableElementsReducer = instantiableElementsSlice.reducer;
