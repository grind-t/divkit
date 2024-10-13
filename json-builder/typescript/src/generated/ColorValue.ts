// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class ColorValue<T extends ColorValueProps = ColorValueProps> {
    readonly _props?: Exact<ColorValueProps, T>;

    readonly type = 'color';
    value: Type<string | DivExpression>;

    constructor(props: Exact<ColorValueProps, T>) {
        this.value = props.value;
    }
}

export interface ColorValueProps {
    value: Type<string | DivExpression>;
}
