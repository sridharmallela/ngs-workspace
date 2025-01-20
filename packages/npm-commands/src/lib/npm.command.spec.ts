jest.mock('node:child_process');

import * as cp from 'node:child_process';

import { NpmCommands } from './npm.command';

describe('Npm Commands ---', () => {
  let execSyncSpy: jest.SpyInstance;

  beforeEach(() => {
    execSyncSpy = jest.spyOn(cp, 'execSync');
    expect(execSyncSpy).toBeDefined();
    execSyncSpy.mockReturnValue('TEST');
    expect(execSyncSpy).not.toHaveBeenCalled();
  });

  afterEach(() => {
    execSyncSpy.mockRestore();
  });

  describe('should test getPackageView ---', () => {
    test.each(['', 'TEST'])('for project: "%s"', npm => {
      execSyncSpy.mockReturnValue(npm);
      const info = NpmCommands.getPackageView('test-project');
      expect(info).toEqual(npm);
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith('npm view test-project ');
    });

    test.each(['', 'TEST'])('for task: "%s"', npm => {
      const info = NpmCommands.getPackageView('test-project', npm);
      expect(info).toEqual('TEST');
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(`npm view test-project ${npm}`);
    });

    test.each([undefined, null, ''])(
      'when project missing "%s"',
      (npm: any) => {
        expect.assertions(5);
        try {
          NpmCommands.getPackageView(npm);
        } catch (err: any) {
          expect(err).toBeDefined();
          expect(err.message).toEqual('missing required project: ');
          expect(execSyncSpy).not.toHaveBeenCalled();
        }
      }
    );
  });

  describe('should test deprecatePackage ---', () => {
    test('for minimal inputs', () => {
      NpmCommands.deprecatePackage('TEST', 'TEST_VER', 'TEST_REG');
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'npm deprecate TEST@"<TEST_VER" "please update to TEST_VER@TEST_VER, which offers more features, better tests and offers security fixes. Any enhancements or bug fix requests to this version are no more supported." --registry=TEST_REG'
      );
    });

    test('for full inputs', () => {
      NpmCommands.deprecatePackage('TEST', 'TEST_VER', 'TEST_REG', 'TEST_MSG');
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'npm deprecate TEST@"<TEST_VER" "please update to TEST_VER@TEST_VER, TEST_MSG" --registry=TEST_REG'
      );
    });

    test.each([undefined, null, ''])(
      'when project missing "%s"',
      (npm: any) => {
        expect.assertions(5);
        try {
          NpmCommands.deprecatePackage(npm, 'TEST_VER', 'TEST_REG', 'TEST_MSG');
        } catch (err: any) {
          expect(err).toBeDefined();
          expect(err.message).toEqual(
            'missing required project:  or version: TEST_VER'
          );
          expect(execSyncSpy).not.toHaveBeenCalled();
        }
      }
    );

    test.each([undefined, null, ''])(
      'when version missing "%s"',
      (npm: any) => {
        expect.assertions(5);
        try {
          NpmCommands.deprecatePackage('TEST', npm, 'TEST_REG', 'TEST_MSG');
        } catch (err: any) {
          expect(err).toBeDefined();
          expect(err.message).toEqual(
            'missing required project: TEST or version: '
          );
          expect(execSyncSpy).not.toHaveBeenCalled();
        }
      }
    );
  });

  describe('should test updateVersion ---', () => {
    test('for minimal inputs', () => {
      NpmCommands.updateVersion('TEST');
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith('cd TEST && npm version patch');
    });

    test.each(['patch', 'minor', 'major'])(
      'for full inputs "%s"',
      (type: any) => {
        NpmCommands.updateVersion('TEST', type);
        expect(execSyncSpy).toHaveBeenCalled();
        expect(execSyncSpy).toHaveBeenCalledTimes(1);
        expect(execSyncSpy).toHaveBeenCalledWith(
          `cd TEST && npm version ${type}`
        );
      }
    );

    test.each([undefined, null, ''])(
      'when project path missing "%s"',
      (npm: any) => {
        expect.assertions(5);
        try {
          NpmCommands.updateVersion(npm);
        } catch (err: any) {
          expect(err).toBeDefined();
          expect(err.message).toEqual('missing required projectPath: ');
          expect(execSyncSpy).not.toHaveBeenCalled();
        }
      }
    );
  });
});
