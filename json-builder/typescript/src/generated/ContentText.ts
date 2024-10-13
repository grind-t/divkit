// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class ContentText<T extends ContentTextProps = ContentTextProps> {
    readonly _props?: Exact<ContentTextProps, T>;

    readonly type = 'text';
    value: Type<string | DivExpression>;

    constructor(props: Exact<ContentTextProps, T>) {
        this.value = props.value;
    }
}

export interface ContentTextProps {
    value: Type<string | DivExpression>;
}
