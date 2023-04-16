import React from 'react';
import { describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { RadiosForms } from './Radios';

describe('RadiosForms', () => {
  it('one of the options should be chosen', () => {
    const { getByLabelText } = render(
      <>
        <Provider store={store}>
          <RadiosForms id="radio1" type="radio" name="radio" label="Nursery" />
          <RadiosForms id="radio2" type="radio" name="radio" label="Breeder" />
        </Provider>
      </>
    );
    const one = getByLabelText(/nursery/i);
    const two = getByLabelText(/breeder/i);
    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    fireEvent.click(two);
    expect(one).not.toBeChecked();
    expect(two).toBeChecked();
    fireEvent.click(one);
    expect(one).toBeChecked();
    expect(two).not.toBeChecked();
  });
});
