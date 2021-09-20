import type UnaryFunction from './UnaryFunction';

describe('UnaryFunction | type | unit test', () => {
  it('defines a function that receives a single argument', () => {
    const show: UnaryFunction = (value) => (
      `The received argument is "${value}".`
    );

    expect(typeof show).toBe('function');
    expect(show(1)).toBe('The received argument is "1".');
  });

  it('receives return and argument types as generics', () => {
    const showNumber: UnaryFunction<string, number> = (value) => (
      `The received argument is "${value.toFixed(2)}".`
    );

    expect(typeof showNumber).toBe('function');
    expect(showNumber(1)).toBe('The received argument is "1.00".');
  });
});
