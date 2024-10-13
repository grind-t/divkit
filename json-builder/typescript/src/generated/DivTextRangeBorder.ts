// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    IDivStroke,
} from './';

/**
 * Character range border.
 */
export interface IDivTextRangeBorder {
    /**
     * One radius of element and stroke corner rounding. Has a lower priority than `corners_radius`.
     */
    corner_radius?: Type<number | DivExpression>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}
