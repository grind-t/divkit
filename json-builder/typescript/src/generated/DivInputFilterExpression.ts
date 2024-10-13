// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Filter based on [calculated expressions](../../expressions).
 */
export class DivInputFilterExpression<T extends DivInputFilterExpressionProps = DivInputFilterExpressionProps> {
    readonly _props?: Exact<DivInputFilterExpressionProps, T>;

    readonly type = 'expression';
    /**
     * [Calculated expression](../../expressions) used to verify the validity of the value.
     */
    condition: Type<IntBoolean | DivExpression>;

    constructor(props: Exact<DivInputFilterExpressionProps, T>) {
        this.condition = props.condition;
    }
}

export interface DivInputFilterExpressionProps {
    /**
     * [Calculated expression](../../expressions) used to verify the validity of the value.
     */
    condition: Type<IntBoolean | DivExpression>;
}
