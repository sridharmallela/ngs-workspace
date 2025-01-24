const configFileMatches = ['*.{config,conf,e2e,po,cy}.{j,t}s?(x)'];
const testFileMatches = [
  '*.{s,S}pec.{j,t}s?(x)',
  '**/e2e/**/*.{j,t}s?(x)',
  '**/__tests__/**/*.{j,t}s?(x)',
  '**/test/**/*.{j,t}s?(x)',
  '**/tests/**/*.{s,S}pec.{j,t}s?(x)'
];

export const ignoresConfigAndTests = [...configFileMatches, ...testFileMatches];

export const ignoresConfigFiles = [...configFileMatches];

export const testFiles = [...testFileMatches];
