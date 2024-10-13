// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * An arbitrary array in JSON format.
 */
export class ArrayVariable<T extends ArrayVariableProps = ArrayVariableProps> {
    readonly _props?: Exact<ArrayVariableProps, T>;

    readonly type = 'array';
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<unknown[]>;

    constructor(props: Exact<ArrayVariableProps, T>) {
        this.name = props.name;
        this.value = props.value;
    }
}

export interface ArrayVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<unknown[]>;
}
