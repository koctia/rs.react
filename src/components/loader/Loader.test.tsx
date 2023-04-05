import React from 'react';
import { describe } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoaderForms } from './Loader';

describe('LoaderForms', () => {
  it('upload files', () => {
    const files = new File(['testfile'], 'testfile.png', { type: 'image/png' });
    const { getByLabelText } = render(<LoaderForms id="test" type="file" />);
    const element = getByLabelText(/upload file/i);
    expect(element).toBeTruthy();
    userEvent.upload(element, files);
    expect((element as HTMLInputElement).files).toHaveLength(0);
  });
});
