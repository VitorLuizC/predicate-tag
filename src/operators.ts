import type { Predicate } from '@bitty/predicate';
import type BinaryFunction from './types/BinaryFunction';
import type UnaryFunction from './types/UnaryFunction';

import { AND, NOT, OR } from '@vitorluizc/predicates';

/** Enumeration of operator types. */
export enum OperatorType {
  /**
   * Infix are operators that should be used between their operands. In the
   * expression "string or number", the "or" is an infix operator.
   */
  INFIX = 'INFIX',

  /**
   * Prefix are operators that should be used before their operand. In the
   * expression "not string", the "not" is a prefix operator.
   */
  PREFIX = 'PREFIX',
}

/** An union between the two types of operators. */
export type Operator =
  | {
      type: OperatorType.PREFIX;
      operator: UnaryFunction<Predicate<unknown>>;
    }
  | {
      type: OperatorType.INFIX;
      operator: BinaryFunction<Predicate<unknown>>;
    };

/** A map with all the supported operators. */
const operators = new Map<string, Operator>();

operators.set('and', {
  type: OperatorType.INFIX,
  operator: AND as BinaryFunction<Predicate<unknown>>,
});

operators.set('or', {
  type: OperatorType.INFIX,
  operator: OR as BinaryFunction<Predicate<unknown>>,
});

operators.set('not', {
  type: OperatorType.PREFIX,
  operator: NOT as UnaryFunction<Predicate<unknown>>,
});

export default operators;
