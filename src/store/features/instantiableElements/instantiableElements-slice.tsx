import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typeElement = { Element: (props?: any) => React.ReactElement, props: Object };

const initialState: typeElement[] = [];

export const instantiableElementsSlice = createSlice({
  name: 'instiableElements',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<typeElement>) => {
      state.push(action.payload);
    },
  },
});

export const { addElement } = instantiableElementsSlice.actions;
export const instantiableElementsReducer = instantiableElementsSlice.reducer;
