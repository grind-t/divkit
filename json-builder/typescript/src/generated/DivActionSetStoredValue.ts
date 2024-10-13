// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivTypedValue,
} from './';

/**
 * Temporarily saves variable to the persistent storage.
 */
export class DivActionSetStoredValue<T extends DivActionSetStoredValueProps = DivActionSetStoredValueProps> {
    readonly _props?: Exact<DivActionSetStoredValueProps, T>;

    readonly type = 'set_stored_value';
    /**
     * Storing time in seconds.
     */
    lifetime: Type<number | DivExpression>;
    /**
     * Nave of stored variable.
     */
    name: Type<string | DivExpression>;
    /**
     * Value to be stored.
     */
    value: Type<DivTypedValue>;

    constructor(props: Exact<DivActionSetStoredValueProps, T>) {
        this.lifetime = props.lifetime;
        this.name = props.name;
        this.value = props.value;
    }
}

export interface DivActionSetStoredValueProps {
    /**
     * Storing time in seconds.
     */
    lifetime: Type<number | DivExpression>;
    /**
     * Nave of stored variable.
     */
    name: Type<string | DivExpression>;
    /**
     * Value to be stored.
     */
    value: Type<DivTypedValue>;
}
