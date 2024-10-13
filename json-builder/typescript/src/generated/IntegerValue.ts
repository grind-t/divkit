// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class IntegerValue<T extends IntegerValueProps = IntegerValueProps> {
    readonly _props?: Exact<IntegerValueProps, T>;

    readonly type = 'integer';
    value: Type<number | DivExpression>;

    constructor(props: Exact<IntegerValueProps, T>) {
        this.value = props.value;
    }
}

export interface IntegerValueProps {
    value: Type<number | DivExpression>;
}
