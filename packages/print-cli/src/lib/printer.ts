import * as colSafe from 'colors/safe';

import { type Options, textSync } from 'figlet';

import type { OptionValues } from 'commander';
import { log } from 'node:console';

const colors = [
  'america',
  'black',
  'blue',
  'cyan',
  'green',
  'grey',
  'magenta',
  'rainbow',
  'red',
  'white',
  'yellow',
  'zebra'
];
const bgColors = [
  'bgBlack',
  'bgBlue',
  'bgCyan',
  'bgGreen',
  'bgMagenta',
  'bgRed',
  'bgWhite',
  'bgYellow'
];
const fonts = ['standard', 'doom', 'slant', 'bell', 'chunky'];

export abstract class Printer {
  static readonly COLORS = colors;

  static readonly BG_COLORS = bgColors;

  static readonly FONTS = fonts;

  private static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  private static printLog(text: string): void {
    log();
    log(text);
    log();
  }

  static printData(text: string, opts: OptionValues): void {
    // is banner
    if (opts.banner) {
      text = textSync(text, {
        font: Printer.capitalize(opts.font),
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      } as Options);
    }
    if (opts.color) {
      text = (colSafe[opts.color as colKey] as colFn)(text);
    }
    if (opts.bgColor) {
      text = (colSafe[opts.bgColor as colKey] as colFn)(text);
    }
    // print data
    Printer.printLog(text);
  }
}

type colKey = keyof typeof colSafe;
type colFn = (str: string) => string;
