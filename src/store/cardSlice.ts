import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUrl } from '../components/api/api';
import { ICardData } from '../interface/card';
// import { SERVER_URL } from '../data/variables';

export const fetchCards = createAsyncThunk('cards/fetchCards', async function (query: string) {
  return await fetchUrl(`${query}`);
  // const response = await fetch(SERVER_URL);
  // const json = await response.json();
  // return json;
});

interface IInitialState {
  cards: ICardData[];
  isLoading: boolean;
  isNotData: boolean;
  error: string;
}

const initialState: IInitialState = {
  cards: [],
  isLoading: false,
  isNotData: false,
  error: '',
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, () => {});
  },
});

export const {} = cardSlice.actions;

export default cardSlice.reducer;
