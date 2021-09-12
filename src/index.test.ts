import type { Predicate, Refinement } from './index.js';

describe('Predicate | type | unit test', () => {
  it('predicate is a function that received a value and returns boolean', () => {
    const isEven: Predicate<number> = (value) => value % 2 === 0;

    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
  });
});

describe('Refinement | type | unit test', () => {
  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  it('is also a predicate', () => {
    const refinement: Refinement<unknown, string> = isString;

    const predicate: Predicate<unknown> = isString;

    expect(refinement).toBe(predicate);
  });

  it('is a function that refines value type', () => {
    // refines from 'unknown' to 'string'.
    const refinement: Refinement<unknown, string> = isString;

    const value: unknown = 'okay';

    // @ts-expect-error because value is 'unknown' here.
    expect(value.toUpperCase()).not.toBe('FAIL');

    if (refinement(value)) {
      // TS knows that value is a 'string' here. It was refined.
      expect(value.toUpperCase()).toBe('OKAY');
    } else {
      fail();
    }
  });
});
