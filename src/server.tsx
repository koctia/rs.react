import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './index.scss';

import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';

export const render = (url: string, option: object) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    option
  );
};
