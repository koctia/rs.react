import React from 'react';
import { describe } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createAppStore } from '../../store';

import { SearchBar } from './SearchBar';

const store = createAppStore();

describe('search bar', () => {
  afterEach(cleanup);
  it('SearchBar value space', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <SearchBar id="test" type="text" />
      </Provider>
    );
    const element = getByRole('textbox');
    expect(element).toContainHTML('');
  });

  it('SearchBar value data', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <SearchBar id="test" type="text" />
      </Provider>
    );
    const element = getByRole('textbox');
    fireEvent.change(element, { target: { value: 'test' } });
    expect(element).toContainHTML('test');
  });
});
