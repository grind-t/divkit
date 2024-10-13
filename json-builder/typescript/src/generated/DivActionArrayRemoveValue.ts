// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Deletes a value from the array
 */
export class DivActionArrayRemoveValue<T extends DivActionArrayRemoveValueProps = DivActionArrayRemoveValueProps> {
    readonly _props?: Exact<DivActionArrayRemoveValueProps, T>;

    readonly type = 'array_remove_value';
    index: Type<number | DivExpression>;
    variable_name: Type<string | DivExpression>;

    constructor(props: Exact<DivActionArrayRemoveValueProps, T>) {
        this.index = props.index;
        this.variable_name = props.variable_name;
    }
}

export interface DivActionArrayRemoveValueProps {
    index: Type<number | DivExpression>;
    variable_name: Type<string | DivExpression>;
}
