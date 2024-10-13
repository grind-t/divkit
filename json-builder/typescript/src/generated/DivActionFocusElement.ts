// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Requests focus for an element. May require a user action on the web.
 */
export class DivActionFocusElement<T extends DivActionFocusElementProps = DivActionFocusElementProps> {
    readonly _props?: Exact<DivActionFocusElementProps, T>;

    readonly type = 'focus_element';
    element_id: Type<string | DivExpression>;

    constructor(props: Exact<DivActionFocusElementProps, T>) {
        this.element_id = props.element_id;
    }
}

export interface DivActionFocusElementProps {
    element_id: Type<string | DivExpression>;
}
