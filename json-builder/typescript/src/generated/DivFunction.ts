// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivEvaluableType,
    IDivFunctionArgument,
} from './';

/**
 * User-defined function.
 */
export interface IDivFunction {
    /**
     * Function argument.
     */
    arguments: Type<NonEmptyArray<IDivFunctionArgument>>;
    /**
     * Function body. Evaluated as an expression using the passed arguments. Doesn't capture external
     * variables.
     */
    body: Type<string>;
    /**
     * Function name.
     */
    name: Type<string>;
    /**
     * Return value type.
     */
    return_type: Type<DivEvaluableType>;
}
