// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Specifies container's end as scroll destination.
 */
export class EndDestination<T extends EndDestinationProps = EndDestinationProps> {
    readonly _props?: Exact<EndDestinationProps, T>;

    readonly type = 'end';

    constructor(props?: Exact<EndDestinationProps, T>) {
    }
}

export interface EndDestinationProps {
}
