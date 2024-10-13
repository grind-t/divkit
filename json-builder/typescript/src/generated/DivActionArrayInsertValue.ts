// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivTypedValue,
} from './';

/**
 * Adds a value to the array
 */
export class DivActionArrayInsertValue<T extends DivActionArrayInsertValueProps = DivActionArrayInsertValueProps> {
    readonly _props?: Exact<DivActionArrayInsertValueProps, T>;

    readonly type = 'array_insert_value';
    index?: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;

    constructor(props: Exact<DivActionArrayInsertValueProps, T>) {
        this.index = props.index;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

export interface DivActionArrayInsertValueProps {
    index?: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}
