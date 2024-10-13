// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Mask for entering text with a fixed number of characters.
 */
export class DivFixedLengthInputMask<T extends DivFixedLengthInputMaskProps = DivFixedLengthInputMaskProps> {
    readonly _props?: Exact<DivFixedLengthInputMaskProps, T>;

    readonly type = 'fixed_length';
    /**
     * If this option is enabled, the text field contains the mask before being filled in.
     */
    always_visible?: Type<IntBoolean | DivExpression>;
    /**
     * String that sets the text input template. For example, the `+7 (###) ###-##-## ` template for
     * a phone number.
     */
    pattern: Type<string | DivExpression>;
    /**
     * Template decoding is a description of the characters that will be replaced with user input.
     */
    pattern_elements: Type<NonEmptyArray<IDivFixedLengthInputMaskPatternElement>>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;

    constructor(props: Exact<DivFixedLengthInputMaskProps, T>) {
        this.always_visible = props.always_visible;
        this.pattern = props.pattern;
        this.pattern_elements = props.pattern_elements;
        this.raw_text_variable = props.raw_text_variable;
    }
}

export interface DivFixedLengthInputMaskProps {
    /**
     * If this option is enabled, the text field contains the mask before being filled in.
     */
    always_visible?: Type<IntBoolean | DivExpression>;
    /**
     * String that sets the text input template. For example, the `+7 (###) ###-##-## ` template for
     * a phone number.
     */
    pattern: Type<string | DivExpression>;
    /**
     * Template decoding is a description of the characters that will be replaced with user input.
     */
    pattern_elements: Type<NonEmptyArray<IDivFixedLengthInputMaskPatternElement>>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}

/**
 * Template decoding is a description of the characters that will be replaced with user input.
 */
export interface IDivFixedLengthInputMaskPatternElement {
    /**
     * A character in the template that will be replaced with a user-defined character.
     */
    key: Type<string | DivExpression>;
    /**
     * The character that's displayed in the input field where the user is expected to enter text.
     * This is used if mask display is enabled.
     */
    placeholder?: Type<string | DivExpression>;
    /**
     * Regular expression for validating character inputs. For example, when a mask is digit-only.
     */
    regex?: Type<string | DivExpression>;
}
