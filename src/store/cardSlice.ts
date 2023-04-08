import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { fetchUrl } from '../components/api/api';
import { ICardData } from '../interface/card';

export const fetchCards = createAsyncThunk('cards/fetchCards', async function (query: string) {
  return await fetchUrl(`${query}`);
});

interface IInitialState {
  cards: ICardData[];
  isLoading: boolean;
  isNotData: boolean;
  error: string;
  seachCard: string;
}

const initialState: IInitialState = {
  cards: [],
  isLoading: false,
  isNotData: false,
  error: '',
  seachCard: '',
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSeachCard: (state, action: PayloadAction<string>) => {
      state.seachCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.isNotData = false;
        state.error = '';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
        state.isNotData = state.cards.length === 0 ? true : false;
      })
      .addCase(fetchCards.rejected, () => {});
  },
});

export const { setSeachCard } = cardSlice.actions;

export default cardSlice.reducer;
