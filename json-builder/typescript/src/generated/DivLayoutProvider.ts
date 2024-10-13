// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export interface IDivLayoutProvider {
    /**
     * Name of the variable that stores the element’s height.
     */
    height_variable_name?: Type<string>;
    /**
     * Name of the variable that stores the element’s width.
     */
    width_variable_name?: Type<string>;
}
