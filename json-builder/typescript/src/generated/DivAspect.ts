// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
 * `height` value.
 */
export interface IDivAspect {
    /**
     * `height = width / ratio`.
     */
    ratio: Type<number | DivExpression>;
}
