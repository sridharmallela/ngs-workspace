jest.mock('figlet');

import * as figlet from 'figlet';

import { Printer } from './printer';

describe('Printer ---', () => {
  beforeEach(() => {
    expect(Printer).toBeDefined();
    expect(Printer.COLORS).toEqual([
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
    expect(Printer.BG_COLORS).toEqual([
      'bgBlack',
      'bgBlue',
      'bgCyan',
      'bgGreen',
      'bgMagenta',
      'bgRed',
      'bgWhite',
      'bgYellow'
    ]);
    expect(Printer.FONTS).toEqual([
      'standard',
      'doom',
      'slant',
      'bell',
      'chunky'
    ]);
  });

  describe('should test capitalize ---', () => {
    test('when various values', () => {
      Printer['printLog']('TEST_DATA');
      expect(Printer['capitalize']('a')).toEqual('A');
      expect(Printer['capitalize']('A')).toEqual('A');
      expect(Printer['capitalize']('ab')).toEqual('Ab');
      expect(Printer['capitalize']('Ab')).toEqual('Ab');
      expect(Printer['capitalize']('aB')).toEqual('Ab');
      expect(Printer['capitalize']('AB')).toEqual('Ab');
      expect(Printer['capitalize']('abc')).toEqual('Abc');
      expect(Printer['capitalize']('Abc')).toEqual('Abc');
      expect(Printer['capitalize']('aBc')).toEqual('Abc');
      expect(Printer['capitalize']('ABc')).toEqual('Abc');
      expect(Printer['capitalize']('aBC')).toEqual('Abc');
      expect(Printer['capitalize']('ABC')).toEqual('Abc');
    });
  });

  describe('should test printData ---', () => {
    let printLogSpy: jest.SpyInstance;
    let textSyncSpy: jest.SpyInstance;

    beforeEach(() => {
      printLogSpy = jest.spyOn(Printer as any, 'printLog');
      expect(printLogSpy).toBeDefined();
      printLogSpy.mockImplementation();
      expect(printLogSpy).not.toHaveBeenCalled();
      textSyncSpy = jest.spyOn(figlet, 'textSync');
      expect(textSyncSpy).toBeDefined();
      textSyncSpy.mockReturnValue('TEST_FIGLET');
      expect(textSyncSpy).not.toHaveBeenCalled();
    });

    afterEach(() => {
      printLogSpy.mockRestore();
      textSyncSpy.mockRestore();
    });

    test.each([
      {},
      { banner: false },
      { color: 'white' },
      { bgColor: 'bgBlack' },
      { font: 'standard' },
      { color: 'white', bgColor: 'bgBlack' },
      { color: 'white', bgColor: 'bgBlack', font: 'standard' },
      { banner: false, color: 'white', bgColor: 'bgBlack', font: 'standard' }
    ])('when "%s"', opts => {
      Printer.printData('text', opts);
      expect(printLogSpy).toHaveBeenCalled();
      expect(printLogSpy).toHaveBeenCalledTimes(1);
      expect(printLogSpy).toHaveBeenCalledWith(expect.stringContaining('text'));
      expect(textSyncSpy).not.toHaveBeenCalled();
    });

    test.each([
      { banner: true, font: 'standard' },
      { banner: true, font: 'standard', color: 'white' },
      { banner: true, font: 'standard', bgColor: 'bgBlack' },
      { banner: true, font: 'standard', color: 'white', bgColor: 'bgBlack' }
    ])('when "%s"', opts => {
      Printer.printData('text', opts);
      expect(printLogSpy).toHaveBeenCalled();
      expect(printLogSpy).toHaveBeenCalledTimes(1);
      expect(printLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('TEST_FIGLET')
      );
      expect(textSyncSpy).toHaveBeenCalled();
      expect(textSyncSpy).toHaveBeenCalledTimes(1);
      expect(textSyncSpy).toHaveBeenCalledWith('text', {
        font: 'Standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      });
    });
  });
});
