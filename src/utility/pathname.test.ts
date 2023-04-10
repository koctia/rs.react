import { describe } from 'vitest';

import { pathName } from './pathname';

describe('pathname data', () => {
  it('should return Home', () => {
    expect(pathName('/')).toBe('Home');
  });

  it('should return About', () => {
    expect(pathName('/about')).toBe('About');
  });

  it('should return Form', () => {
    expect(pathName('/form')).toBe('Form');
  });

  it('should return Not Page', () => {
    expect(pathName('/sdf')).toBe('Not Page');
  });
});
