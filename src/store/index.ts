import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cardReducer from './cardsSlice';
import formReducer from './formSlice';
import headerReducer from './headerSlice';

const rootReducer = combineReducers({
  cards: cardReducer,
  forms: formReducer,
  headers: headerReducer,
});

export const createAppStore = (initialState?: PreloadedState<RootState>, isServer = false) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: !isServer,
  });
  setupListeners(store.dispatch);
  return store;
};
export type AppStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type getStateStore = AppStore['getState'];
