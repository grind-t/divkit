// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Gaussian image blur.
 */
export class DivBlur<T extends DivBlurProps = DivBlurProps> {
    readonly _props?: Exact<DivBlurProps, T>;

    readonly type = 'blur';
    /**
     * Blur radius. Defines how many pixels blend into each other. Specified in: `dp`.
     */
    radius: Type<number | DivExpression>;

    constructor(props: Exact<DivBlurProps, T>) {
        this.radius = props.radius;
    }
}

export interface DivBlurProps {
    /**
     * Blur radius. Defines how many pixels blend into each other. Specified in: `dp`.
     */
    radius: Type<number | DivExpression>;
}
