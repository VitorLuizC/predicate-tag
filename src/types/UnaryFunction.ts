/** A function that receives a single argument and returns. */
type UnaryFunction<
  Result = unknown,
  Argument = unknown,
> = (argument: Argument) => Result;

export default UnaryFunction;
