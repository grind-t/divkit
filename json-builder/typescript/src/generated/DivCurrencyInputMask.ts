// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Mask for entering currency in the specified regional format.
 */
export class DivCurrencyInputMask<T extends DivCurrencyInputMaskProps = DivCurrencyInputMaskProps> {
    readonly _props?: Exact<DivCurrencyInputMaskProps, T>;

    readonly type = 'currency';
    /**
     * Language tag that the currency format should match, as per [IETF BCP
     * 47](https://en.wikipedia.org/wiki/IETF_language_tag). If the language is not set, it is
     * defined automatically.
     */
    locale?: Type<string | DivExpression>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;

    constructor(props: Exact<DivCurrencyInputMaskProps, T>) {
        this.locale = props.locale;
        this.raw_text_variable = props.raw_text_variable;
    }
}

export interface DivCurrencyInputMaskProps {
    /**
     * Language tag that the currency format should match, as per [IETF BCP
     * 47](https://en.wikipedia.org/wiki/IETF_language_tag). If the language is not set, it is
     * defined automatically.
     */
    locale?: Type<string | DivExpression>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}
