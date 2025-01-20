jest.mock('node:child_process');
jest.mock('node:console', () => {
  return {
    error: jest.fn().mockImplementation(),
    info: jest.fn().mockImplementation(),
    log: jest.fn().mockImplementation(),
    warn: jest.fn().mockImplementation()
  };
});

import * as cp from 'node:child_process';

import { NxCommands } from './nx.command';

describe('Nx Commands ---', () => {
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

  describe('should test getAffected ---', () => {
    test.each(['', 'TEST'])('for "%s"', async nx => {
      execSyncSpy.mockReturnValue(nx);
      const affected = await NxCommands.getAffected('main');
      expect(affected).toEqual([nx || undefined]);
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'nx show projects --affected --base=origin/main'
      );
    });
  });

  describe('should test getProjectsWithTask ---', () => {
    test.each(['', 'TEST'])('for "%s"', nx => {
      execSyncSpy.mockReturnValue(nx);
      const projects = NxCommands.getProjectsWithTask('build');
      expect(projects).toEqual([nx]);
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'nx show projects --with-target build'
      );
    });

    test('for multiple', () => {
      execSyncSpy.mockReturnValue('TEST1\nTEST2\nTEST3\nTEST4');
      const projects = NxCommands.getProjectsWithTask('publish');
      expect(projects).toEqual(['TEST1', 'TEST2', 'TEST3', 'TEST4']);
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'nx show projects --with-target publish'
      );
    });
  });

  describe('should test getProjectInfo ---', () => {
    test.each(['{}', '{"test":"test"}'])('for "%s"', nx => {
      execSyncSpy.mockReturnValue(nx);
      const projectInfo = NxCommands.getProjectInfo('test-project');
      expect(projectInfo).toBeDefined();
      expect(execSyncSpy).toHaveBeenCalled();
      expect(execSyncSpy).toHaveBeenCalledTimes(1);
      expect(execSyncSpy).toHaveBeenCalledWith(
        'nx show project test-project --json'
      );
    });
  });
});
