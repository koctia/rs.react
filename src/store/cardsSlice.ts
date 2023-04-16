import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUrl } from '../components/api/api';
import { ICardData } from '../interface/card';

export const fetchCards = createAsyncThunk('cards/fetchCards', async function (query: string) {
  return await fetchUrl(`${query}`);
});

export const fetchCard = createAsyncThunk('cards/fetchCard', async function (query: string) {
  return await fetchUrl(`${query}`);
});

interface IInitialState {
  cards: ICardData[];
  card: ICardData[];
  isLoading: boolean;
  isOpen: boolean;
  isNotData: boolean;
  error: string;
  seachCard: string;
}

const initialState: IInitialState = {
  cards: [],
  card: [],
  isLoading: false,
  isOpen: false,
  isNotData: false,
  error: '',
  seachCard: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSeachCard: (state, action: PayloadAction<string>) => {
      state.seachCard = action.payload;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
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

    builder
      .addCase(fetchCard.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.card = action.payload;
      });
  },
});

export const { setSeachCard, setOpen } = cardsSlice.actions;

export default cardsSlice.reducer;
