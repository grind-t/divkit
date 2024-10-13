// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivTypedValue,
} from './';

/**
 * Sets the value in the array by index.
 */
export class DivActionArraySetValue<T extends DivActionArraySetValueProps = DivActionArraySetValueProps> {
    readonly _props?: Exact<DivActionArraySetValueProps, T>;

    readonly type = 'array_set_value';
    index: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;

    constructor(props: Exact<DivActionArraySetValueProps, T>) {
        this.index = props.index;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

export interface DivActionArraySetValueProps {
    index: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}
