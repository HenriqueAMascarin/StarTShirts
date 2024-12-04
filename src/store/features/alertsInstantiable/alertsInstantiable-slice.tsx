import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { typeAlerts } from '@src/modules/Alert/components/AlertItem/AlertItem';

type typeProps = Omit<typeAlerts, "onHideFn">;

export type typeElement = {
  Element: ({ }: typeAlerts) => React.ReactElement,
  props: typeProps,
  keyItem: number
};

const initialState: typeElement[] = [];

export const alertsInstantiableSlice = createSlice({
  name: 'alertsInstantiable',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<typeElement>) => {
      return [...state, action.payload];
    },
    removeElement: (state, action: PayloadAction<typeElement["keyItem"]>) => {
      return state.filter((instantiable) => instantiable.keyItem !== action.payload);
    },
  },
});

export const { addElement, removeElement } = alertsInstantiableSlice.actions;
export const alertsInstantiableReducer = alertsInstantiableSlice.reducer;
