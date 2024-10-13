// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class StringValue<T extends StringValueProps = StringValueProps> {
    readonly _props?: Exact<StringValueProps, T>;

    readonly type = 'string';
    value: Type<string | DivExpression>;

    constructor(props: Exact<StringValueProps, T>) {
        this.value = props.value;
    }
}

export interface StringValueProps {
    value: Type<string | DivExpression>;
}
