import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { pathName } from '../utility/pathname';

interface IInitialState {
  text: string;
}

const initialState: IInitialState = {
  text: pathName(location.pathname),
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
