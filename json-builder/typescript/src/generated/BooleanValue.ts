// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class BooleanValue<T extends BooleanValueProps = BooleanValueProps> {
    readonly _props?: Exact<BooleanValueProps, T>;

    readonly type = 'boolean';
    value: Type<boolean | DivExpression>;

    constructor(props: Exact<BooleanValueProps, T>) {
        this.value = props.value;
    }
}

export interface BooleanValueProps {
    value: Type<boolean | DivExpression>;
}
