import { npmCommands } from './npm';

describe('npmCommands', () => {
  it('should work', () => {
    expect(npmCommands()).toEqual('npm-commands');
  });
});
