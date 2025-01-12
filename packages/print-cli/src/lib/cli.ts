import * as pkgJson from './../../package.json';

import { Command, Option } from 'commander';

import { Printer } from './printer';
import { argv } from 'node:process';

export class PrintCli {
  private command: Command;

  constructor() {
    this.command = new Command();
    this.init();
  }

  private init(): void {
    this.command
      .name('print-cli')
      .description('CLI to print to console ASCII banner')
      .version(pkgJson.version)
      .argument('<text>', 'string to print')
      .option('-b, --banner', 'print banner in ASCII style')
      .addOption(
        new Option('-f, --font <font>', 'font used to print text')
          .default('standard', 'standard')
          .choices(Printer.FONTS)
      )
      .addOption(
        new Option('-c, --color <color>', 'color of printed text')
          .default('white', 'white')
          .choices(Printer.COLORS)
      )
      .addOption(
        new Option('--bg-color <bg-color>', 'background color of printed text')
          .default('bgBlack', 'black')
          .choices(Printer.BG_COLORS)
      )
      .action(Printer.printData);
    this.command.parse(argv);
  }
}
