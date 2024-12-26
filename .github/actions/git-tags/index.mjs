import { setOutput, setFailed, debug } from '@actions/core';
import { error, log } from 'node:console';

import { execSync } from 'node:child_process';

try {
  debug(`Executing 'git describe --tags --abbrev=0'`);
  const currentTag =
    execSync('git describe --tags --abbrev=0').toString().trim() || '';
  debug(`currentTag:${currentTag}`);
  const dateTag = new Date().toISOString().split('T')[0].replaceAll('-', '.');
  debug(`dateTag:${dateTag}`);
  let next = 0;
  const tags = currentTag.split('.');
  const dateTags = dateTag.split('.');
  // check if previous tag is 4 characters, and year, month and date matches
  if (
    tags.length > 3 &&
    !isNaN(Number(tags[3])) &&
    tags[0] === dateTags[0] &&
    tags[1] === dateTags[1] &&
    tags[2] === dateTags[2]
  ) {
    next = Number(tags[3]) + 1;
  }
  const nextTag = `${dateTag}.${next}`;
  debug(`nextTag:${nextTag}`);
  log(`currentTag:${currentTag} && nextTag:${nextTag}`);
  setOutput('currentTag', currentTag);
  setOutput('nextTag', nextTag);
} catch (err) {
  error(`error occurred ${err}`);
  setFailed(err);
}
