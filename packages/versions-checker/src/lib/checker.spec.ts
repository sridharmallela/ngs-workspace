import * as nc from 'node:console';
import * as ncp from 'node:child_process';
import * as np from 'node:process';
import * as semver from 'semver';

jest.mock('node:console', () => ({
  ...jest.requireActual('node:console'),
  log: jest.fn()
}));
jest.mock('node:child_process', () => ({
  ...jest.requireActual('node:child_process'),
  spawnSync: jest.fn()
}));
jest.mock('node:process', () => ({
  ...jest.requireActual('node:process'),
  exit: jest.fn()
}));
jest.mock('semver');

import { VersionsChecker } from './checker';

const OPTS = {
  node: 'TEST',
  npm: 'TEST',
  yarn: 'TEST',
  git: 'TEST',
  eslint: 'TEST'
};

describe('VersionsChecker ---', () => {
  let logSpy: jest.SpyInstance;
  let findOutVersionSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(nc, 'log');
    expect(logSpy).toBeDefined();
    logSpy.mockImplementation();
    expect(logSpy).not.toHaveBeenCalled();
    findOutVersionSpy = jest.spyOn(VersionsChecker as any, 'findOutVersion');
    expect(findOutVersionSpy).toBeDefined();
    findOutVersionSpy.mockReturnValue('TEST_VAL');
    expect(findOutVersionSpy).not.toHaveBeenCalled();
  });

  afterEach(() => {
    logSpy.mockRestore();
    findOutVersionSpy.mockRestore();
  });

  describe('should test findOutVersion ---', () => {
    let spawnSyncSpy: jest.SpyInstance;

    beforeEach(() => {
      findOutVersionSpy.mockRestore();
      spawnSyncSpy = jest.spyOn(ncp, 'spawnSync');
      expect(spawnSyncSpy).toBeDefined();
      spawnSyncSpy.mockReturnValue({ stderr: 'TEST' });
      expect(spawnSyncSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      spawnSyncSpy.mockRestore();
    });

    test('when error', () => {
      expect(VersionsChecker['findOutVersion']('npm')).toEqual('--');
      expect(spawnSyncSpy).toHaveBeenCalled();
      expect(spawnSyncSpy).toHaveBeenCalledTimes(1);
      expect(spawnSyncSpy).toHaveBeenCalledWith('npm', ['--version'], {
        cwd: './node_modules/.bin/'
      });
      expect(logSpy).not.toHaveBeenCalled();
    });

    test('when valid "1.2.3"', () => {
      spawnSyncSpy.mockReturnValue({ stderr: '', stdout: '1.2.3' });
      expect(VersionsChecker['findOutVersion']('node')).toEqual('1.2.3');
      expect(spawnSyncSpy).toHaveBeenCalled();
      expect(spawnSyncSpy).toHaveBeenCalledTimes(1);
      expect(spawnSyncSpy).toHaveBeenCalledWith('node', ['--version'], {
        cwd: './node_modules/.bin/'
      });
      expect(logSpy).not.toHaveBeenCalled();
    });

    test('when valid "v1.2.3"', () => {
      spawnSyncSpy.mockReturnValue({ stderr: '', stdout: 'v1.2.3' });
      expect(VersionsChecker['findOutVersion']('yarn')).toEqual('1.2.3');
      expect(spawnSyncSpy).toHaveBeenCalled();
      expect(spawnSyncSpy).toHaveBeenCalledTimes(1);
      expect(spawnSyncSpy).toHaveBeenCalledWith('yarn', ['--version'], {
        cwd: './node_modules/.bin/'
      });
      expect(logSpy).not.toHaveBeenCalled();
    });
  });

  describe('should test checkAll ---', () => {
    test('when valid', () => {
      VersionsChecker['checkAll']();
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[32m   %s: %s \x1b[39m',
        'node',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[32m   %s: %s \x1b[39m',
        'npm',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[32m   %s: %s \x1b[39m',
        'yarn',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[32m   %s: %s \x1b[39m',
        'git',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[32m   %s: %s \x1b[39m',
        'eslint',
        'TEST_VAL'
      );
    });

    test('when error', () => {
      findOutVersionSpy.mockImplementation(() => {
        throw new Error();
      });
      VersionsChecker['checkAll']();
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[32m   %s: %s \x1b[39m',
        'node',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[32m   %s: %s \x1b[39m',
        'npm',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[32m   %s: %s \x1b[39m',
        'yarn',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[32m   %s: %s \x1b[39m',
        'git',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[32m   %s: %s \x1b[39m',
        'eslint',
        '--'
      );
    });
  });

  describe('should test checkOpts ---', () => {
    let satisfiesSpy: jest.SpyInstance;
    let exitSpy: jest.SpyInstance;

    beforeEach(() => {
      satisfiesSpy = jest.spyOn(semver, 'satisfies');
      expect(satisfiesSpy).toBeDefined();
      satisfiesSpy.mockReturnValue(true);
      expect(satisfiesSpy).not.toHaveBeenCalled();
      exitSpy = jest.spyOn(np, 'exit');
      expect(exitSpy).toBeDefined();
      exitSpy.mockImplementation();
      expect(exitSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      exitSpy.mockRestore();
      satisfiesSpy.mockRestore();
    });

    test.each([
      {},
      { all: true },
      { test: 'TEST' },
      { node: '' },
      { npm: '' },
      { yarn: '' },
      { git: '' },
      { eslint: '' },
      { node: '', npm: '', yarn: '' },
      { node: '', npm: '', yarn: '', git: '', eslint: '' }
    ])('when invalid options "%s"', opts => {
      VersionsChecker['checkOpts'](opts, true);
      expect(findOutVersionSpy).not.toHaveBeenCalled();
      expect(satisfiesSpy).not.toHaveBeenCalled();
      expect(logSpy).not.toHaveBeenCalled();
      expect(exitSpy).not.toHaveBeenCalled();
    });

    test('when valid options, matches', () => {
      VersionsChecker['checkOpts'](OPTS, false);
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(satisfiesSpy).toHaveBeenCalled();
      expect(satisfiesSpy).toHaveBeenCalledTimes(5);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(1, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[32m   %s: %s \x1b[39m',
        'node',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(2, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[32m   %s: %s \x1b[39m',
        'npm',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(3, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[32m   %s: %s \x1b[39m',
        'yarn',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(4, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[32m   %s: %s \x1b[39m',
        'git',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(5, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[32m   %s: %s \x1b[39m',
        'eslint',
        'TEST_VAL'
      );
      expect(exitSpy).not.toHaveBeenCalled();
    });

    test('when valid options, matches and silent "true"', () => {
      VersionsChecker['checkOpts'](OPTS, true);
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(satisfiesSpy).not.toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[32m   %s: %s \x1b[39m',
        'node',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[32m   %s: %s \x1b[39m',
        'npm',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[32m   %s: %s \x1b[39m',
        'yarn',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[32m   %s: %s \x1b[39m',
        'git',
        'TEST_VAL'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[32m   %s: %s \x1b[39m',
        'eslint',
        'TEST_VAL'
      );
      expect(exitSpy).not.toHaveBeenCalled();
    });

    test('when valid options, no match', () => {
      satisfiesSpy.mockReturnValue(false);
      VersionsChecker['checkOpts'](OPTS, false);
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(satisfiesSpy).toHaveBeenCalled();
      expect(satisfiesSpy).toHaveBeenCalledTimes(5);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(1, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'node',
        'TEST_VAL',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(2, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'npm',
        'TEST_VAL',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(3, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'yarn',
        'TEST_VAL',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(4, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'git',
        'TEST_VAL',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(satisfiesSpy).toHaveBeenNthCalledWith(5, 'TEST_VAL', 'TEST');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'eslint',
        'TEST_VAL',
        'TEST'
      );
      expect(exitSpy).toHaveBeenCalled();
      expect(exitSpy).toHaveBeenCalledTimes(1);
      expect(exitSpy).toHaveBeenCalledWith(1);
    });

    test('when error, silent "true"', () => {
      findOutVersionSpy.mockImplementation(() => {
        throw new Error();
      });
      VersionsChecker['checkOpts'](OPTS, true);
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(satisfiesSpy).not.toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[32m   %s: %s \x1b[39m',
        'node',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[32m   %s: %s \x1b[39m',
        'npm',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[32m   %s: %s \x1b[39m',
        'yarn',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[32m   %s: %s \x1b[39m',
        'git',
        '--'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[32m   %s: %s \x1b[39m',
        'eslint',
        '--'
      );
      expect(exitSpy).not.toHaveBeenCalled();
    });

    test('when error, silent "false"', () => {
      findOutVersionSpy.mockImplementation(() => {
        throw new Error();
      });
      VersionsChecker['checkOpts'](OPTS, false);
      expect(findOutVersionSpy).toHaveBeenCalled();
      expect(findOutVersionSpy).toHaveBeenCalledTimes(5);
      expect(satisfiesSpy).not.toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(5);
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(1, 'node');
      expect(logSpy).toHaveBeenNthCalledWith(
        1,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'node',
        '--',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(2, 'npm');
      expect(logSpy).toHaveBeenNthCalledWith(
        2,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'npm',
        '--',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(3, 'yarn');
      expect(logSpy).toHaveBeenNthCalledWith(
        3,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'yarn',
        '--',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(4, 'git');
      expect(logSpy).toHaveBeenNthCalledWith(
        4,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'git',
        '--',
        'TEST'
      );
      expect(findOutVersionSpy).toHaveBeenNthCalledWith(5, 'eslint');
      expect(logSpy).toHaveBeenNthCalledWith(
        5,
        '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
        'eslint',
        '--',
        'TEST'
      );
      expect(exitSpy).toHaveBeenCalled();
      expect(exitSpy).toHaveBeenCalledTimes(1);
      expect(exitSpy).toHaveBeenCalledWith(1);
    });
  });

  describe('should test validate ---', () => {
    let checkAllSpy: jest.SpyInstance;
    let checkOptsSpy: jest.SpyInstance;

    beforeEach(() => {
      checkAllSpy = jest.spyOn(VersionsChecker as any, 'checkAll');
      expect(checkAllSpy).toBeDefined();
      checkAllSpy.mockImplementation();
      expect(checkAllSpy).not.toHaveBeenCalled();
      checkOptsSpy = jest.spyOn(VersionsChecker as any, 'checkOpts');
      expect(checkOptsSpy).toBeDefined();
      checkOptsSpy.mockImplementation();
      expect(checkOptsSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      checkAllSpy.mockRestore();
      checkOptsSpy.mockRestore();
    });

    test('when options.all', () => {
      VersionsChecker.validate({ all: true });
      expect(checkAllSpy).toHaveBeenCalled();
      expect(checkAllSpy).toHaveBeenCalledTimes(1);
      expect(checkOptsSpy).not.toHaveBeenCalled();
    });

    test.each([
      {},
      { silent: false },
      { all: false },
      { silent: false, all: false }
    ])('when no options.all, "%s"', opts => {
      VersionsChecker.validate(opts);
      expect(checkAllSpy).not.toHaveBeenCalled();
      expect(checkOptsSpy).toHaveBeenCalled();
      expect(checkOptsSpy).toHaveBeenCalledTimes(1);
      expect(checkOptsSpy).toHaveBeenCalledWith(opts, false);
    });
  });
});
