// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export interface IDivInputValidatorBase {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id?: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable?: Type<string>;
}
