// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Specifies container's start as scroll destination.
 */
export class StartDestination<T extends StartDestinationProps = StartDestinationProps> {
    readonly _props?: Exact<StartDestinationProps, T>;

    readonly type = 'start';

    constructor(props?: Exact<StartDestinationProps, T>) {
    }
}

export interface StartDestinationProps {
}
