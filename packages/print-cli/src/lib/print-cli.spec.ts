import { printCli } from './print-cli';

describe('printCli', () => {
  it('should work', () => {
    expect(printCli()).toEqual('print-cli');
  });
});
