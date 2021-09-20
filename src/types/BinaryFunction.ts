/** A function that receives two arguments and returns. */
type BinaryFunction<
  Result = unknown,
  ArgumentA = unknown,
  ArgumentB = unknown,
> = (argumentA: ArgumentA, argumentB: ArgumentB) => Result;

export default BinaryFunction;
