import { debug, getInput, info, setFailed, setOutput } from '@actions/core';

import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { gt } from 'semver';

const getLatestTag = project => {
  try {
    debug(`Executing 'npm view ${project} dist-tags.latest'`);
    return execSync(`npm view ${project} dist-tags.latest`).toString().trim();
  } catch (err) {
    info(`\n error occurred so defaulting to "0.0.0"\n`);
    return '0.0.0';
  }
};

const getPackageInfo = filePath => {
  debug(`Reading package.json from ${filePath}`);
  return JSON.parse(readFileSync(filePath).toString());
};

try {
  const tags = [];
  const workspace = getInput('homeDir');
  debug(`CWD: ${workspace}`);
  const affectedProjects = JSON.parse(getInput('affectedProjects'));
  debug(`affectedProjects: ${affectedProjects}`);
  affectedProjects.forEach(proj => {
    info(`\n\nRunning npm publish for ${proj}`);
    const projPath = `${workspace}/packages/${proj}`;
    debug(`${proj} >> projPath: ${projPath}`);
    const { version: pkgTag, name: pkgName } = getPackageInfo(
      `${projPath}/package.json`
    );
    debug(`${proj} >> pkgTag: ${pkgTag}`);
    debug(`${pkgName} >> pkgTag: ${pkgName}`);
    const npmTag = getLatestTag(pkgName);
    debug(`${proj} >> npmTag: ${npmTag}`);
    if (gt(pkgTag, npmTag)) {
      info(`${proj} >> copying ".npmrc", ".npmignore", "LICENSE", "README.md"`);
      execSync(`cp ${workspace}/.npmrc ${projPath}`);
      execSync(`cp ${workspace}/.npmignore ${projPath}`);
      execSync(`cp ${workspace}/LICENSE ${projPath}`);
      execSync(`cp ${workspace}/docs/${proj}.md ${projPath}/README.md`);
      info(`${proj} >> Executing "cd ${projPath} && npm publish"`);
      execSync(`cd ${projPath} && npm publish`);
      info(`Completed npm publish for ${proj} and tag is v${pkgTag}`);
      tags.push(`${proj}@${pkgTag}`);
      if (npmTag !== '0.0.0') {
        info(`${proj} >> Executing npm deprecate"`);
        execSync(
          `npm deprecate ${pkgName}@"<${pkgTag}" "Version is no longer supported, deprecated in favor of latest version, please update to \"${pkgName}@${pkgTag}\", which offers more features, better tests and offers security fixes. Any enhancements or bug fix requests to this version are no more supported."`
        );
        info(`Completed npm deprecate for ${proj}`);
      }
    } else {
      info(`Skipping npm publish for ${proj} and tag is v${pkgTag}`);
    }
  });
  setOutput('tags', tags);
} catch (err) {
  setFailed(err);
}
