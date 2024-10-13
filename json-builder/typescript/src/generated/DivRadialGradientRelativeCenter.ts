// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Location of the central point of the gradient relative to the element borders.
 */
export class DivRadialGradientRelativeCenter<T extends DivRadialGradientRelativeCenterProps = DivRadialGradientRelativeCenterProps> {
    readonly _props?: Exact<DivRadialGradientRelativeCenterProps, T>;

    readonly type = 'relative';
    /**
     * Coordinate value in the range "0...1".
     */
    value: Type<number | DivExpression>;

    constructor(props: Exact<DivRadialGradientRelativeCenterProps, T>) {
        this.value = props.value;
    }
}

export interface DivRadialGradientRelativeCenterProps {
    /**
     * Coordinate value in the range "0...1".
     */
    value: Type<number | DivExpression>;
}
