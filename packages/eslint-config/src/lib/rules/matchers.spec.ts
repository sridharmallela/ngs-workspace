import {
  ignoresConfigAndTests,
  ignoresConfigFiles,
  testFiles
} from './matchers';

describe('Ignores Configs and Tests ---', () => {
  let testCandidate: any;

  beforeAll(() => {
    expect(ignoresConfigAndTests).toBeDefined();
    testCandidate = ignoresConfigAndTests;
    expect(testCandidate).toBeDefined();
  });

  describe('files ---', () => {
    test('should test files', () => {
      expect(testCandidate[0]).toEqual('*.{config,conf,e2e,po,cy}.{j,t}s?(x)');
      expect(testCandidate[1]).toEqual('*.{s,S}pec.{j,t}s?(x)');
      expect(testCandidate[2]).toEqual('**/e2e/**/*.{j,t}s?(x)');
      expect(testCandidate[3]).toEqual('**/__tests__/**/*.{j,t}s?(x)');
      expect(testCandidate[4]).toEqual('**/test/**/*.{j,t}s?(x)');
      expect(testCandidate[5]).toEqual('**/tests/**/*.{s,S}pec.{j,t}s?(x)');
    });
  });
});

describe('Ignores Configs ---', () => {
  let testCandidate: any;

  beforeAll(() => {
    expect(ignoresConfigFiles).toBeDefined();
    testCandidate = ignoresConfigFiles;
    expect(testCandidate).toBeDefined();
  });

  describe('files ---', () => {
    test('should test files', () => {
      expect(testCandidate[0]).toEqual('*.{config,conf,e2e,po,cy}.{j,t}s?(x)');
    });
  });
});

describe('Test Files ---', () => {
  let testCandidate: any;

  beforeAll(() => {
    expect(testFiles).toBeDefined();
    testCandidate = testFiles;
    expect(testCandidate).toBeDefined();
  });

  describe('files ---', () => {
    test('should test files', () => {
      expect(testCandidate[0]).toEqual('*.{s,S}pec.{j,t}s?(x)');
      expect(testCandidate[1]).toEqual('**/e2e/**/*.{j,t}s?(x)');
      expect(testCandidate[2]).toEqual('**/__tests__/**/*.{j,t}s?(x)');
      expect(testCandidate[3]).toEqual('**/test/**/*.{j,t}s?(x)');
      expect(testCandidate[4]).toEqual('**/tests/**/*.{s,S}pec.{j,t}s?(x)');
    });
  });
});
