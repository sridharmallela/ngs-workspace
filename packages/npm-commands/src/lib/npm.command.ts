import { execSync } from 'node:child_process';

const DEF_REGISTRY = 'https://registry.npmjs.org';
const DEF_DEP_MSG =
  'which offers more features, better tests and offers security fixes. Any enhancements or bug fix requests to this version are no more supported.';

export type NpmVersions = 'patch' | 'minor' | 'major';

export abstract class NpmCommands {
  static getPackageView(pkgName: string, task?: string): string {
    if (pkgName) {
      return execSync(`npm view ${pkgName} ${task || ''}`)
        .toString()
        .trim();
    } else {
      throw new Error(`missing required project: ${pkgName ?? ''}`);
    }
  }

  static deprecatePackage(
    pkgName: string,
    version: string,
    registry?: string,
    message?: string
  ): void {
    if (pkgName && version) {
      execSync(
        `npm deprecate ${pkgName}@"<${version}" "please update to ${version}@${version}, ${message || DEF_DEP_MSG}" --registry=${registry || DEF_REGISTRY}`
      );
    } else {
      throw new Error(
        `missing required project: ${pkgName ?? ''} or version: ${version ?? ''}`
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
