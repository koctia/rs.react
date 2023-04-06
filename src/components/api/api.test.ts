import { describe } from 'vitest';

import { fetchUrl } from './api';

describe('API component', () => {
  it('the fetch ok', async () => {
    const data = await fetchUrl('');
    expect(Array.isArray(data)).toEqual(true);
  });

  it('the fetch fails with an error', async () => {
    const data = await fetchUrl('', '');
    expect(data).toMatch('error');
  });

  it('should return the data in seach "far"', async () => {
    const data = await fetchUrl('far');
    expect(Array.isArray(data)).toEqual(true);
  });
});
