// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivSizeUnit,
} from './';

/**
 * It sets margins.
 */
export interface IDivEdgeInsets {
    /**
     * Bottom margin.
     */
    bottom?: Type<number | DivExpression>;
    /**
     * End margin. Margin position depends on the interface orientation. Has higher priority than the
     * left and right margins.
     */
    end?: Type<number | DivExpression>;
    /**
     * Left margin.
     */
    left?: Type<number | DivExpression>;
    /**
     * Right margin.
     */
    right?: Type<number | DivExpression>;
    /**
     * Start margin. Margin position depends on the interface orientation. Has higher priority than
     * the left and right margins.
     */
    start?: Type<number | DivExpression>;
    /**
     * Top margin.
     */
    top?: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    unit?: Type<DivSizeUnit | DivExpression>;
}
