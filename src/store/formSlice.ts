import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICardData } from '../interface/card';

interface IInitialState {
  cards: ICardData[];
  infoMessage: boolean;
}

const initialState: IInitialState = {
  cards: [],
  infoMessage: false,
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addNewCard(state, action: PayloadAction<ICardData>) {
      state.cards.push(action.payload);
    },
    setInfoMessage(state, action: PayloadAction<boolean>) {
      state.infoMessage = action.payload;
    },
  },
});

export const { addNewCard, setInfoMessage } = formSlice.actions;

export default formSlice.reducer;
