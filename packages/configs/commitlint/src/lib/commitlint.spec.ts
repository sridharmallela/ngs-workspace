import testCandidate from './commitlint.js';

describe('CommitLint Config ---', () => {
  beforeEach(() => {
    expect(testCandidate).toBeDefined();
    expect(testCandidate.rules).toBeDefined();
  });

  describe('should test rules ---', () => {
    test.each(['body-empty', 'footer-empty', 'header-trim'])(
      'for rule "%s"',
      rule => {
        expect(testCandidate.rules?.[rule]).toEqual([2, 'always']);
      }
    );

    test.each(['body-case', 'header-case', 'subject-case'])(
      'for rule "%s"',
      rule => {
        expect(testCandidate.rules?.[rule]).toEqual([
          2,
          'always',
          ['sentence-case', 'lower-case']
        ]);
      }
    );

    test.each([
      'body-leading-blank',
      'footer-leading-blank',
      'scope-empty',
      'type-empty'
    ])('for rule "%s"', rule => {
      expect(testCandidate.rules?.[rule]).toEqual([2, 'never']);
    });

    test.each([
      'body-max-length',
      'body-max-line-length',
      'body-min-length',
      'footer-max-length',
      'footer-max-line-length',
      'footer-min-length',
      'header-max-length',
      'header-min-length',
      'scope-max-length',
      'scope-min-length',
      'subject-max-length',
      'subject-min-length',
      'type-max-length',
      'type-min-length'
    ])('for rule "%s"', rule => {
      expect(testCandidate.rules?.[rule]).toEqual([
        2,
        'always',
        expect.any(Number)
      ]);
    });

    test.each(['scope-case', 'type-case'])('for rule "%s"', rule => {
      expect(testCandidate.rules?.[rule]).toEqual([2, 'always', 'lower-case']);
    });

    test('for rule "type-enum"', () => {
      expect(testCandidate.rules?.['type-enum']).toEqual([
        2,
        'always',
        ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'test']
      ]);
    });
  });
});
