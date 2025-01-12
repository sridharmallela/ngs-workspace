import * as pkgJson from './../../package.json';

import { Command } from 'commander';
import { VersionsChecker } from './checker';
import { argv } from 'node:process';

export class VersionsCheckerCli {
  private command: Command;

  constructor() {
    this.command = new Command();
    this.init();
  }

  private init(): void {
    this.command
      .name('versions-checker')
      .description('CLI to validate versions of node, npm, yarn, git, eslint')
      .version(pkgJson.version)
      .option('--all', 'prints all installed versions')
      .option('-s, --silent', "will not exit even versions didn't match")
      .option('-n, --node [version]', 'check node version')
      .option('-m, --npm [version]', 'check npm version')
      .option('-y, --yarn [version]', 'check yarn version')
      .option('-g, --git [version]', 'check git version')
      .option('-e, --eslint [version]', 'check eslint version')
      .action(VersionsChecker.validate);
    this.command.parse(argv);
  }
}
