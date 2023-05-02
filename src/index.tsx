import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import { Provider } from 'react-redux';
import { createAppStore } from './store';

import { App } from './App';

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}

const store = createAppStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
