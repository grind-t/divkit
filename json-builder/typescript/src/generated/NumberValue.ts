// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class NumberValue<T extends NumberValueProps = NumberValueProps> {
    readonly _props?: Exact<NumberValueProps, T>;

    readonly type = 'number';
    value: Type<number | DivExpression>;

    constructor(props: Exact<NumberValueProps, T>) {
        this.value = props.value;
    }
}

export interface NumberValueProps {
    value: Type<number | DivExpression>;
}
