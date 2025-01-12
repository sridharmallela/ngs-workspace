import * as commander from 'commander';
import * as pkgJson from './../../package.json';

jest.mock('commander');

import { PrintCli } from './cli';

describe('PrintCli ---', () => {
  let commandSpy: jest.SpyInstance;

  beforeEach(() => {
    commandSpy = jest.spyOn(commander, 'Command');
    expect(commandSpy).toBeDefined();
    commandSpy.mockReturnValue('TEST_CMD');
    expect(commandSpy).not.toHaveBeenCalled();
  });

  afterEach(() => {
    commandSpy.mockRestore();
  });

  describe('should test instantiation ---', () => {
    let initSpy: jest.SpyInstance;

    beforeEach(() => {
      initSpy = jest.spyOn(PrintCli.prototype as any, 'init');
      expect(initSpy).toBeDefined();
      initSpy.mockImplementation();
      expect(initSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      initSpy.mockRestore();
    });

    test('when valid', () => {
      const testCandidate = new PrintCli();
      expect(testCandidate).toBeDefined();
      expect(testCandidate['command']).toBeDefined();
      expect(initSpy).toHaveBeenCalled();
      expect(initSpy).toHaveBeenCalledTimes(1);
      expect(commandSpy).toHaveBeenCalled();
      expect(commandSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('should test init ---', () => {
    const cmd = {
      name: jest.fn().mockReturnThis(),
      description: jest.fn().mockReturnThis(),
      version: jest.fn().mockReturnThis(),
      argument: jest.fn().mockReturnThis(),
      option: jest.fn().mockReturnThis(),
      addOption: jest.fn().mockReturnThis(),
      action: jest.fn().mockReturnThis(),
      parse: jest.fn().mockReturnThis()
    };
    const opt = {
      default: jest.fn().mockReturnThis(),
      choices: jest.fn().mockReturnThis()
    };

    let optionSpy: jest.SpyInstance;

    beforeEach(() => {
      commandSpy.mockReturnValue(cmd);
      optionSpy = jest.spyOn(commander, 'Option');
      expect(optionSpy).toBeDefined();
      optionSpy.mockReturnValue(opt);
      expect(optionSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      optionSpy.mockRestore();
    });

    test('when valid', () => {
      const testCandidate = new PrintCli();
      expect(testCandidate).toBeDefined();
      expect(testCandidate['command']).toBeDefined();
      expect(commandSpy).toHaveBeenCalled();
      expect(commandSpy).toHaveBeenCalledTimes(1);
      expect(cmd.name).toHaveBeenCalled();
      expect(cmd.name).toHaveBeenCalledTimes(1);
      expect(cmd.name).toHaveBeenCalledWith('print-cli');
      expect(cmd.description).toHaveBeenCalled();
      expect(cmd.description).toHaveBeenCalledTimes(1);
      expect(cmd.description).toHaveBeenCalledWith(
        'CLI to print to console ASCII banner'
      );
      expect(cmd.version).toHaveBeenCalled();
      expect(cmd.version).toHaveBeenCalledTimes(1);
      expect(cmd.version).toHaveBeenCalledWith(pkgJson.version);
      expect(cmd.argument).toHaveBeenCalled();
      expect(cmd.argument).toHaveBeenCalledTimes(1);
      expect(cmd.argument).toHaveBeenCalledWith('<text>', 'string to print');
      expect(cmd.option).toHaveBeenCalled();
      expect(cmd.option).toHaveBeenCalledTimes(1);
      expect(cmd.option).toHaveBeenCalledWith(
        '-b, --banner',
        'print banner in ASCII style'
      );
      expect(cmd.addOption).toHaveBeenCalled();
      expect(cmd.addOption).toHaveBeenCalledTimes(3);
      expect(cmd.addOption).toHaveBeenCalledWith(opt);
      expect(cmd.action).toHaveBeenCalled();
      expect(cmd.action).toHaveBeenCalledTimes(1);
      expect(cmd.parse).toHaveBeenCalled();
      expect(cmd.parse).toHaveBeenCalledTimes(1);
      expect(optionSpy).toHaveBeenCalled();
      expect(optionSpy).toHaveBeenCalledTimes(3);
      expect(opt.default).toHaveBeenCalled();
      expect(opt.default).toHaveBeenCalledTimes(3);
      expect(opt.choices).toHaveBeenCalled();
      expect(opt.choices).toHaveBeenCalledTimes(3);
      expect(optionSpy).toHaveBeenNthCalledWith(
        1,
        '-f, --font <font>',
        'font used to print text'
      );
      expect(opt.default).toHaveBeenNthCalledWith(1, 'standard', 'standard');
      expect(opt.choices).toHaveBeenNthCalledWith(1, [
        'standard',
        'doom',
        'slant',
        'bell',
        'chunky'
      ]);
      expect(optionSpy).toHaveBeenNthCalledWith(
        2,
        '-c, --color <color>',
        'color of printed text'
      );
      expect(opt.default).toHaveBeenNthCalledWith(2, 'white', 'white');
      expect(opt.choices).toHaveBeenNthCalledWith(2, [
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
      ]);

      expect(optionSpy).toHaveBeenNthCalledWith(
        3,
        '--bg-color <bg-color>',
        'background color of printed text'
      );
      expect(opt.default).toHaveBeenNthCalledWith(3, 'bgBlack', 'black');
      expect(opt.choices).toHaveBeenNthCalledWith(3, [
        'bgBlack',
        'bgBlue',
        'bgCyan',
        'bgGreen',
        'bgMagenta',
        'bgRed',
        'bgWhite',
        'bgYellow'
      ]);
    });
  });
});
