// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Sets margins without regard to screen properties.
 */
export interface IDivAbsoluteEdgeInsets {
    /**
     * Bottom margin.
     */
    bottom?: Type<number | DivExpression>;
    /**
     * Left margin.
     */
    left?: Type<number | DivExpression>;
    /**
     * Right margin.
     */
    right?: Type<number | DivExpression>;
    /**
     * Top margin.
     */
    top?: Type<number | DivExpression>;
}
