import { getInput, setOutput, setFailed, debug } from '@actions/core';
import { log, warn } from 'node:console';

import { execSync } from 'node:child_process';
import { gt } from 'semver';
import { readFileSync } from 'node:fs';

const getLatestTag = project => {
  try {
    debug(`Executing 'npm view ${project} dist-tags.latest'`);
    return execSync(`npm view ${project} dist-tags.latest`).toString().trim();
  } catch (err) {
    warn(`\n error occurred so defaulting to "0.0.0"\n`);
    return '0.0.0';
  }
};

const getPackageInfo = filePath => {
  debug(`Reading package.json from ${filePath}`);
  return JSON.parse(readFileSync(filePath).toString());
};

try {
  log(getInput('npmToken'));
  const tags = [];
  const workspace = getInput('homeDir');
  debug(`CWD: ${workspace}`);
  const affectedProjects = JSON.parse(getInput('affectedProjects'));
  debug(`affectedProjects: ${affectedProjects}`);
  log(`affectedProjects: ${affectedProjects}`);
  affectedProjects.forEach(proj => {
    log(`\n\nRunning npm publish for ${proj}`);
    const projPath = `${workspace}/packages/${proj}`;
    debug(`${proj} >> projPath: ${projPath}`);
    const npmTag = getLatestTag(proj);
    debug(`${proj} >> npmTag: ${npmTag}`);
    const pkgTag = getPackageInfo(`${projPath}/package.json`).version;
    debug(`${proj} >> pkgTag: ${pkgTag}`);
    if (gt(pkgTag, npmTag)) {
      log(`${proj} >> copying ".npmrc", ".npmignore"`);
      execSync(`cp ${workspace}/.npmrc ${projPath}`);
      execSync(`cp ${workspace}/.npmignore ${projPath}`);
      debug(`${proj} >> Executing "cd ${projPath} && npm publish"`);
      execSync(`cd ${projPath} && npm publish`);
      log(`Completed npm publish for ${proj} and tag is v${pkgTag}`);
      tags.push(`${proj}@${pkgTag}`);
    } else {
      log(`Skipping npm publish for ${proj} and tag is v${pkgTag}`);
    }
  });
  setOutput('tags', tags);
} catch (err) {
  setFailed(err);
}
