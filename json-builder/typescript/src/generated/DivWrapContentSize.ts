// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivSizeUnit,
} from './';

/**
 * The size of an element adjusts to its contents.
 */
export class DivWrapContentSize<T extends DivWrapContentSizeProps = DivWrapContentSizeProps> {
    readonly _props?: Exact<DivWrapContentSizeProps, T>;

    readonly type = 'wrap_content';
    /**
     * The final size mustn't exceed the parent one. On iOS and in a default browser `false`. On
     * Android always `true`.
     */
    constrained?: Type<IntBoolean | DivExpression>;
    /**
     * Maximum size of an element.
     */
    max_size?: Type<IDivWrapContentSizeConstraintSize>;
    /**
     * Minimum size of an element.
     */
    min_size?: Type<IDivWrapContentSizeConstraintSize>;

    constructor(props?: Exact<DivWrapContentSizeProps, T>) {
        this.constrained = props?.constrained;
        this.max_size = props?.max_size;
        this.min_size = props?.min_size;
    }
}

export interface DivWrapContentSizeProps {
    /**
     * The final size mustn't exceed the parent one. On iOS and in a default browser `false`. On
     * Android always `true`.
     */
    constrained?: Type<IntBoolean | DivExpression>;
    /**
     * Maximum size of an element.
     */
    max_size?: Type<IDivWrapContentSizeConstraintSize>;
    /**
     * Minimum size of an element.
     */
    min_size?: Type<IDivWrapContentSizeConstraintSize>;
}

export interface IDivWrapContentSizeConstraintSize {
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    value: Type<number | DivExpression>;
}
