// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Specifies position measured in `dp` from container's start as scroll destination. Applicable
 * only in `gallery`.
 */
export class OffsetDestination<T extends OffsetDestinationProps = OffsetDestinationProps> {
    readonly _props?: Exact<OffsetDestinationProps, T>;

    readonly type = 'offset';
    /**
     * Position in `dp`.
     */
    value: Type<number | DivExpression>;

    constructor(props: Exact<OffsetDestinationProps, T>) {
        this.value = props.value;
    }
}

export interface OffsetDestinationProps {
    /**
     * Position in `dp`.
     */
    value: Type<number | DivExpression>;
}
