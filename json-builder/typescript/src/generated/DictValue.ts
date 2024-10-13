// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class DictValue<T extends DictValueProps = DictValueProps> {
    readonly _props?: Exact<DictValueProps, T>;

    readonly type = 'dict';
    value: Type<{}>;

    constructor(props: Exact<DictValueProps, T>) {
        this.value = props.value;
    }
}

export interface DictValueProps {
    value: Type<{}>;
}
