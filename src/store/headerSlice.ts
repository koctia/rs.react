import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { pathName } from '../utility/pathname';

interface IInitialState {
  text: string;
}

export const initialState: IInitialState = {
  text: pathName('/'),
};

const headerSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setText } = headerSlice.actions;

export default headerSlice.reducer;
