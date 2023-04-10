import React from 'react';
import { describe } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { InputForms } from './InputForms';

describe('InputForms', () => {
  afterEach(cleanup);
  it('InputForms value space', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <InputForms id="test" type="text" />
      </Provider>
    );
    const element = getByRole('textbox');
    expect(element).toContainHTML('');
  });

  it('InputForms value data', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <InputForms id="test" type="text" />
      </Provider>
    );
    const element = getByRole('textbox');
    fireEvent.change(element, { target: { value: 'test' } });
    expect(element).toContainHTML('test');
  });
});
