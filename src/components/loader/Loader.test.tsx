import React from 'react';
import { describe } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { LoaderForms } from './Loader';

describe('LoaderForms', () => {
  it('upload files', () => {
    const files = new File(['testfile'], 'testfile.png', { type: 'image/png' });
    const { getByLabelText } = render(
      <Provider store={store}>
        <LoaderForms id="test" type="file" />
      </Provider>
    );
    const element = getByLabelText(/upload file/i);
    expect(element).toBeTruthy();
    userEvent.upload(element, files);
    expect((element as HTMLInputElement).files).toHaveLength(0);
  });
});
