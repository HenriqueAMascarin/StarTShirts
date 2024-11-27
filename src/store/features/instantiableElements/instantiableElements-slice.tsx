import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type typeElement = {Element:  React.ComponentClass, props: Object};

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
