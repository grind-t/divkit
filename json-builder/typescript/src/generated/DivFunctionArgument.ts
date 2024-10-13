// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivEvaluableType,
} from './';

/**
 * Function argument.
 */
export interface IDivFunctionArgument {
    /**
     * Function argument name.
     */
    name: Type<string>;
    /**
     * Function argument type.
     */
    type: Type<DivEvaluableType>;
}
