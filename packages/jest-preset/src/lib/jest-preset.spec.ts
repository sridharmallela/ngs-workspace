import { jestPreset } from './jest-preset';

describe('jestPreset', () => {
  it('should work', () => {
    expect(jestPreset()).toEqual('jest-preset');
  });
});
