// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Removes focus from an element.
 */
export class DivActionClearFocus<T extends DivActionClearFocusProps = DivActionClearFocusProps> {
    readonly _props?: Exact<DivActionClearFocusProps, T>;

    readonly type = 'clear_focus';

    constructor(props?: Exact<DivActionClearFocusProps, T>) {
    }
}

export interface DivActionClearFocusProps {
}
