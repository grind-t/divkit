// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Regex validator.
 */
export class DivInputValidatorRegex<T extends DivInputValidatorRegexProps = DivInputValidatorRegexProps> {
    readonly _props?: Exact<DivInputValidatorRegexProps, T>;

    readonly type = 'regex';
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * A regular expression (pattern) that the field value must match.
     */
    pattern: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;

    constructor(props: Exact<DivInputValidatorRegexProps, T>) {
        this.allow_empty = props.allow_empty;
        this.label_id = props.label_id;
        this.pattern = props.pattern;
        this.variable = props.variable;
    }
}

export interface DivInputValidatorRegexProps {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * A regular expression (pattern) that the field value must match.
     */
    pattern: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
}
