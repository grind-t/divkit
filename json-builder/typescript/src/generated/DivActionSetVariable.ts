// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivTypedValue,
} from './';

/**
 * Assigns a value to the variable
 */
export class DivActionSetVariable<T extends DivActionSetVariableProps = DivActionSetVariableProps> {
    readonly _props?: Exact<DivActionSetVariableProps, T>;

    readonly type = 'set_variable';
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;

    constructor(props: Exact<DivActionSetVariableProps, T>) {
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

export interface DivActionSetVariableProps {
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}
