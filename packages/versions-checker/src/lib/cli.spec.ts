import * as commander from 'commander';
import * as pkgJson from './../../package.json';

jest.mock('commander');

import { VersionsCheckerCli } from './cli';

describe('VersionsCheckerCli ---', () => {
  let commandSpy: jest.SpyInstance;

  beforeEach(() => {
    commandSpy = jest.spyOn(commander, 'Command');
    expect(commandSpy).toBeDefined();
    commandSpy.mockReturnValue('TEST_CMD');
    expect(commandSpy).not.toHaveBeenCalled();
  });

  afterEach(() => {
    commandSpy.mockRestore();
  });

  describe('should test instantiation ---', () => {
    let initSpy: jest.SpyInstance;

    beforeEach(() => {
      initSpy = jest.spyOn(VersionsCheckerCli.prototype as any, 'init');
      expect(initSpy).toBeDefined();
      initSpy.mockImplementation();
      expect(initSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      initSpy.mockRestore();
    });

    test('when valid', () => {
      const testCandidate = new VersionsCheckerCli();
      expect(testCandidate).toBeDefined();
      expect(testCandidate['command']).toBeDefined();
      expect(initSpy).toHaveBeenCalled();
      expect(initSpy).toHaveBeenCalledTimes(1);
      expect(commandSpy).toHaveBeenCalled();
      expect(commandSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('should test init ---', () => {
    const cmd = {
      name: jest.fn().mockReturnThis(),
      description: jest.fn().mockReturnThis(),
      version: jest.fn().mockReturnThis(),
      option: jest.fn().mockReturnThis(),
      action: jest.fn().mockReturnThis(),
      parse: jest.fn().mockReturnThis()
    };

    test('when valid', () => {
      commandSpy.mockReturnValue(cmd);
      const testCandidate = new VersionsCheckerCli();
      expect(testCandidate).toBeDefined();
      expect(testCandidate['command']).toBeDefined();
      expect(commandSpy).toHaveBeenCalled();
      expect(commandSpy).toHaveBeenCalledTimes(1);
      expect(cmd.name).toHaveBeenCalled();
      expect(cmd.name).toHaveBeenCalledTimes(1);
      expect(cmd.name).toHaveBeenCalledWith('versions-checker');
      expect(cmd.description).toHaveBeenCalled();
      expect(cmd.description).toHaveBeenCalledTimes(1);
      expect(cmd.description).toHaveBeenCalledWith(
        'CLI to validate versions of node, npm, yarn, git, eslint'
      );
      expect(cmd.version).toHaveBeenCalled();
      expect(cmd.version).toHaveBeenCalledTimes(1);
      expect(cmd.version).toHaveBeenCalledWith(pkgJson.version);
      expect(cmd.option).toHaveBeenCalled();
      expect(cmd.option).toHaveBeenCalledTimes(7);
      expect(cmd.option).toHaveBeenNthCalledWith(
        1,
        '--all',
        'prints all installed versions'
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        2,
        '-s, --silent',
        "will not exit even versions didn't match"
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        3,
        '-n, --node [version]',
        'check node version'
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        4,
        '-m, --npm [version]',
        'check npm version'
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        5,
        '-y, --yarn [version]',
        'check yarn version'
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        6,
        '-g, --git [version]',
        'check git version'
      );
      expect(cmd.option).toHaveBeenNthCalledWith(
        7,
        '-e, --eslint [version]',
        'check eslint version'
      );
      expect(cmd.action).toHaveBeenCalled();
      expect(cmd.action).toHaveBeenCalledTimes(1);
      expect(cmd.parse).toHaveBeenCalled();
      expect(cmd.parse).toHaveBeenCalledTimes(1);
    });
  });
});
