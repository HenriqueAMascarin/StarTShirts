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
    filterElement: (state, action: PayloadAction<typeElement>) => {
      state = state.filter((objectElement) => objectElement != action.payload);
    },
  },
});

export const { addElement, filterElement } = instantiableElementsSlice.actions;
export const instantiableElementsReducer = instantiableElementsSlice.reducer;
