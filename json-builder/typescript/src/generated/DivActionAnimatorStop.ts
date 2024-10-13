// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Stops the specified animator.
 */
export class DivActionAnimatorStop<T extends DivActionAnimatorStopProps = DivActionAnimatorStopProps> {
    readonly _props?: Exact<DivActionAnimatorStopProps, T>;

    readonly type = 'animator_stop';
    /**
     * The identifier of the animator being stopped.
     */
    animator_id: Type<string>;

    constructor(props: Exact<DivActionAnimatorStopProps, T>) {
        this.animator_id = props.animator_id;
    }
}

export interface DivActionAnimatorStopProps {
    /**
     * The identifier of the animator being stopped.
     */
    animator_id: Type<string>;
}
