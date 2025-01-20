import { execSync } from 'node:child_process';

const DEF_DEP_MSG =
  'which offers more features, better tests and offers security fixes. Any enhancements or bug fix requests to this version are no more supported.';

export type NpmVersions = 'patch' | 'minor' | 'major';

export abstract class NpmCommands {
  static getPackageView(project: string, task?: string): string {
    if (project) {
      return execSync(`npm view ${project} ${task || ''}`)
        .toString()
        .trim();
    } else {
      throw new Error(`missing required project: ${project ?? ''}`);
    }
  }

  static deprecatePackage(
    project: string,
    version: string,
    registry: string,
    message?: string
  ): void {
    if (project && version) {
      execSync(
        `npm deprecate ${project}@"<${version}" "please update to ${version}@${version}, ${message || DEF_DEP_MSG}" --registry=${registry}`
      );
    } else {
      throw new Error(
        `missing required project: ${project ?? ''} or version: ${version ?? ''}`
      );
    }
  }

  static updateVersion(projectPath: string, type?: NpmVersions): void {
    if (projectPath) {
      execSync(`cd ${projectPath} && npm version ${type || 'patch'}`);
    } else {
      throw new Error(`missing required projectPath: ${projectPath ?? ''}`);
    }
  }
}
