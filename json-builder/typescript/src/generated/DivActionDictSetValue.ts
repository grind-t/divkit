// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivTypedValue,
} from './';

/**
 * Sets the value in the dictionary by the specified key. Deletes the key if the value is not
 * set.
 */
export class DivActionDictSetValue<T extends DivActionDictSetValueProps = DivActionDictSetValueProps> {
    readonly _props?: Exact<DivActionDictSetValueProps, T>;

    readonly type = 'dict_set_value';
    key: Type<string | DivExpression>;
    value?: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;

    constructor(props: Exact<DivActionDictSetValueProps, T>) {
        this.key = props.key;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

export interface DivActionDictSetValueProps {
    key: Type<string | DivExpression>;
    value?: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}
