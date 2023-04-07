import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
