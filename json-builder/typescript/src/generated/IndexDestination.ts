// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Specifies element with provided index as scroll destination.
 */
export class IndexDestination<T extends IndexDestinationProps = IndexDestinationProps> {
    readonly _props?: Exact<IndexDestinationProps, T>;

    readonly type = 'index';
    /**
     * Index of contaner's item.
     */
    value: Type<number | DivExpression>;

    constructor(props: Exact<IndexDestinationProps, T>) {
        this.value = props.value;
    }
}

export interface IndexDestinationProps {
    /**
     * Index of contaner's item.
     */
    value: Type<number | DivExpression>;
}
