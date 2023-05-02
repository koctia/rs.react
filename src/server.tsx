import React from 'react';
import './index.scss';

import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Response } from 'express';
import { Provider } from 'react-redux';
import { RootState, createAppStore } from './store';
import { initialState as initFormsSlace } from './store/formSlice';
import { initialState as initHeadersSlace } from './store/headerSlice';

import { SERVER_URL } from './data/variables';
import { ICardData } from './interface/card';
import { App } from './App';

const getStamp = (state: object) => `
  <script type="text/javascript" id="preloaded-state">
  // WARNING: See the following for security issues around embedding JSON in HTML:
  // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
  window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
  </script>
`;

const getStampParts = (stamp: string, state: object) => {
  const fiedStamp = getStamp(state);
  return stamp.replace('<!--ssr-preload-body-->', fiedStamp).split('<!--ssr-body-->');
};

const getCatalogCardsApi = (callback: (result: ICardData[]) => void) => {
  fetch(`${SERVER_URL}`)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch(() => callback([]));
};

export const render = (url: string, res: Response, stamp: string) => {
  getCatalogCardsApi((result) => {
    const preloadedState: RootState = {
      cards: {
        cards: result || [],
        card: [],
        isLoading: false,
        isOpen: false,
        isNotData: false,
        error: '',
        seachCard: '',
      },
      forms: initFormsSlace,
      headers: initHeadersSlace,
    };
    const store = createAppStore(preloadedState, true);
    const [stampBefore, stampAfter] = getStampParts(stamp, store.getState());
    res.write(stampBefore);
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </Provider>
      </React.StrictMode>,
      {
        onShellReady() {
          pipe(res);
        },
        onAllReady() {
          res.write(stampAfter);
          res.end();
        },
        onError(err) {
          console.error(err);
        },
      }
    );
  });
};
