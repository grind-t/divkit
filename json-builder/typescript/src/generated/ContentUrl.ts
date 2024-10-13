// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class ContentUrl<T extends ContentUrlProps = ContentUrlProps> {
    readonly _props?: Exact<ContentUrlProps, T>;

    readonly type = 'url';
    value: Type<string | DivExpression>;

    constructor(props: Exact<ContentUrlProps, T>) {
        this.value = props.value;
    }
}

export interface ContentUrlProps {
    value: Type<string | DivExpression>;
}
