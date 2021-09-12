import Interpolation from './Interpolation';
import tokenize from './tokenize';

describe('tokenize | function | unit test', () => {
  function is(strings: TemplateStringsArray, ...interpolations: unknown[]) {
    return tokenize({ strings, interpolations });
  }

  it('tokenizes strings and interpolations', () => {
    expect(is`string`).toEqual(['string']);
    expect(is`string or number`).toEqual(['string', 'or', 'number']);
    expect(is`not ${isFinite}`).toEqual(['not', new Interpolation(isFinite)]);
    expect(is`number  and equals ${NaN} or string and equals ${'NaN'}`).toEqual(
      [
        'number',
        'and',
        'equals',
        new Interpolation(NaN),
        'or',
        'string',
        'and',
        'equals',
        new Interpolation('NaN'),
      ],
    );
  });
});
