import type { OptionValues } from 'commander';
import { exit } from 'node:process';
import { log } from 'node:console';
import { satisfies } from 'semver';
import { spawnSync } from 'node:child_process';

const ALL_OPTS = ['node', 'npm', 'yarn', 'git', 'eslint'];

export abstract class VersionsChecker {
  private static findOutVersion(key: string): string {
    const { stderr, stdout } = spawnSync(key, ['--version'], {
      cwd: './node_modules/.bin/'
    });
    return stderr.toString().trim()
      ? '--'
      : stdout
          .toString()
          .trim()
          .replace(/[^0-9.]/gm, '');
  }

  private static checkAll(): void {
    ALL_OPTS.forEach(key => {
      let data = '';
      try {
        data = VersionsChecker.findOutVersion(key);
      } catch (e) {
        data = '--';
      }
      log('\x1b[32m   %s: %s \x1b[39m', key, data);
    });
  }

  private static checkOpts(opts: OptionValues, isSilent: boolean): void {
    let isValid = true;
    const data: Record<string, string> = {};
    ALL_OPTS.forEach(key => {
      if (opts[key]) {
        data[key] = opts[key];
      }
    });
    for (const key in data) {
      const cfg = { exp: data[key], act: '', isVal: isSilent };
      try {
        cfg.act = VersionsChecker.findOutVersion(key);
        if (!isSilent) {
          cfg.isVal = satisfies(cfg.act, cfg.exp);
        }
      } catch (e) {
        cfg.act = '--';
      }
      if (cfg.isVal) {
        log('\x1b[32m   %s: %s \x1b[39m', key, cfg.act);
      } else {
        isValid = false;
        log(
          '\x1b[31m   %s: "%s" but expected is "%s" \x1b[39m',
          key,
          cfg.act,
          cfg.exp
        );
      }
    }
    if (!isValid) {
      exit(1);
    }
  }

  static validate(opts: OptionValues): void {
    if (opts.all) {
      VersionsChecker.checkAll();
    } else {
      VersionsChecker.checkOpts(opts, !!opts.silent);
    }
  }
}
