import { eslintConfig } from './config';

describe('eslintConfig', () => {
  it('should work', () => {
    expect(eslintConfig()).toEqual('eslint-config');
  });
});
