import { setOutput, setFailed, debug, info } from '@actions/core';

import { execSync } from 'node:child_process';

try {
  debug(`Executing 'git describe --tags --abbrev=0'`);
  const currentTag =
    execSync('git describe --tags --abbrev=0').toString().trim() || '';
  debug(`currentTag:${currentTag}`);
  const dateTag = new Date().toISOString().split('T')[0].replaceAll('-', '.');
  debug(`dateTag:${dateTag}`);
  let next = 0;
  const tags = currentTag.split('-');
  if (tags.length > 1 && tags[0] === dateTag && !isNaN(Number(tags[1]))) {
    next = Number(tags[1]) + 1;
  }
  const nextTag = `${dateTag}-${next}`;
  debug(`nextTag:${nextTag}`);
  info(`currentTag:${currentTag} && nextTag:${nextTag}`);
  setOutput('currentTag', currentTag);
  setOutput('nextTag', nextTag);
} catch (err) {
  setFailed(err);
}
