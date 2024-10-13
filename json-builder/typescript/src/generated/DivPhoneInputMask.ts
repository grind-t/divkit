// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Mask for entering phone numbers with dynamic regional format identification.
 */
export class DivPhoneInputMask<T extends DivPhoneInputMaskProps = DivPhoneInputMaskProps> {
    readonly _props?: Exact<DivPhoneInputMaskProps, T>;

    readonly type = 'phone';
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;

    constructor(props: Exact<DivPhoneInputMaskProps, T>) {
        this.raw_text_variable = props.raw_text_variable;
    }
}

export interface DivPhoneInputMaskProps {
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}
