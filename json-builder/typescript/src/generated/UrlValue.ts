// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class UrlValue<T extends UrlValueProps = UrlValueProps> {
    readonly _props?: Exact<UrlValueProps, T>;

    readonly type = 'url';
    value: Type<string | DivExpression>;

    constructor(props: Exact<UrlValueProps, T>) {
        this.value = props.value;
    }
}

export interface UrlValueProps {
    value: Type<string | DivExpression>;
}
