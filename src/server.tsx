import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './App';
import './index.scss';

import { Provider } from 'react-redux';
import { store } from './store';

export const render = (url: string) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}></StaticRouter>
      </Provider>
    </React.StrictMode>
  );
};
