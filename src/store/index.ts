import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardsSlice';
import formReducer from './formSlice';
import headerReducer from './headerSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    forms: formReducer,
    headers: headerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
