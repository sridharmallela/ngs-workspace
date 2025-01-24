import { importsConfig, importsIgnore } from './imports';

describe('Error Rules ---', () => {
  describe('should test importsConfig ---', () => {
    let testCandidate: any;

    beforeAll(() => {
      expect(importsConfig).toBeDefined();
      testCandidate = importsConfig;
      expect(testCandidate).toBeDefined();
    });

    test.each([
      'import/default',
      'import/export',
      'import/group-exports',
      'import/newline-after-import',
      'import/no-duplicates',
      'import/no-mutable-exports',
      'import/no-named-as-default',
      'import/no-named-as-default-member',
      'import/no-self-import'
    ])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('error');
    });
  });

  describe('should test importsIgnore ---', () => {
    test.each([
      'import/no-duplicates',
      'import/no-mutable-exports',
      'import/no-named-as-default',
      'import/no-unresolved'
    ])('for "%s"', rule => {
      expect(importsIgnore[rule]).toEqual('off');
    });
  });
});
