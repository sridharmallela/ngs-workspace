import { printCli } from './print-cli.js';

describe('printCli', () => {
  it('should work', () => {
    expect(printCli()).toEqual('print-cli');
  });
});
