// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class ArrayValue<T extends ArrayValueProps = ArrayValueProps> {
    readonly _props?: Exact<ArrayValueProps, T>;

    readonly type = 'array';
    value: Type<unknown[] | DivExpression>;

    constructor(props: Exact<ArrayValueProps, T>) {
        this.value = props.value;
    }
}

export interface ArrayValueProps {
    value: Type<unknown[] | DivExpression>;
}
