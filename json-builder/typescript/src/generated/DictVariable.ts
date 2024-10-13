// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * An arbitrary object in JSON format.
 */
export class DictVariable<T extends DictVariableProps = DictVariableProps> {
    readonly _props?: Exact<DictVariableProps, T>;

    readonly type = 'dict';
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<{}>;

    constructor(props: Exact<DictVariableProps, T>) {
        this.name = props.name;
        this.value = props.value;
    }
}

export interface DictVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<{}>;
}
