// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivPivot,
} from './';

/**
 * Transformation of the element.
 */
export interface IDivTransform {
    /**
     * X coordinate of the rotation axis.
     */
    pivot_x?: Type<DivPivot>;
    /**
     * Y coordinate of the rotation axis.
     */
    pivot_y?: Type<DivPivot>;
    /**
     * Degrees of the element rotation. Positive values used for clockwise rotation.
     */
    rotation?: Type<number | DivExpression>;
}
