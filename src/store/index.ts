import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardsSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    forms: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
