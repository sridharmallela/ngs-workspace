import { stylelintConfig } from './stylelint';

describe('stylelintConfig', () => {
  it('should work', () => {
    expect(stylelintConfig()).toEqual('stylelint-config');
  });
});
