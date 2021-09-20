import type BinaryFunction from './BinaryFunction';

describe('BinaryFunction | type | unit test', () => {
  it('defines a function that receives two arguments', () => {
    const tuple: BinaryFunction = (a, b) => [a, b];

    expect(tuple(1, 2)).toEqual([1, 2]);
  });

  it("receives return and the two arguments' types as generics", () => {
    const sum: BinaryFunction<number, number, number> = (a, b) => a + b;

    expect(sum(1, 2)).toBe(3);
  });
});
