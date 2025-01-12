/* eslint-disable jest/no-conditional-expect */

'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('node:path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testCandidate = require('./programmer');

describe('lib/programmer ---', () => {
  beforeEach(() => {
    expect(testCandidate).toBeDefined();
    expect(testCandidate.commander).toBeDefined();
    expect(testCandidate.exit).toBeDefined();
    expect(testCandidate.exited).toEqual(false);
  });

  test('should test copyrights', () => {
    const year = String(new Date().getUTCFullYear());
    expect(testCandidate.copyrights()).toEqual(`  Copyright (c) ${year} `);
    expect(testCandidate.copyrights('TEST_COPYRIGHTS')).toEqual(
      `  Copyright (c) ${year} TEST_COPYRIGHTS`
    );
  });

  test('should test promptMessage', () => {
    const { platform } = process;
    if (platform !== 'win32') {
      expect(testCandidate.promptMessage()).toContain('    $ ');
      expect(testCandidate.promptMessage('TEST_PROMPT_MESSAGE')).toEqual(
        '    $ TEST_PROMPT_MESSAGE'
      );
      Object.defineProperty(process, 'platform', { value: 'win32' });
      expect(testCandidate.promptMessage('TEST_PROMPT_MESSAGE')).toEqual(
        '    > TEST_PROMPT_MESSAGE'
      );
    } else {
      expect(testCandidate.promptMessage()).toContain('    > ');
      expect(testCandidate.promptMessage('TEST_PROMPT_MESSAGE')).toEqual(
        '    > TEST_PROMPT_MESSAGE'
      );
      Object.defineProperty(process, 'platform', { value: 'darwin' });
      expect(testCandidate.promptMessage('TEST_PROMPT_MESSAGE')).toEqual(
        '    $ TEST_PROMPT_MESSAGE'
      );
    }
    Object.defineProperty(process, 'platform', { value: platform });
  });

  test('should test exit', () => {
    const { exit } = process;
    Object.defineProperty(process, 'exit', {
      value: code => {
        expect(code).toEqual(0);
      }
    });
    expect(testCandidate.exited).toEqual(false);
    testCandidate.exit(0);
    Object.defineProperty(process, 'exit', {
      value: exit
    });
  });

  // eslint-disable-next-line jest/no-done-callback
  test('should test runCommand', done => {
    testCandidate.runCommand(
      resolve(`${__dirname}/../../mocks/test-script`),
      ['--version'],
      (code, out, err) => {
        expect(code).toEqual(null);
        expect(out).toEqual('testing process only\n');
        expect(err).toEqual('error occurred processing your request\n');
        done();
      }
    );
  });
});
