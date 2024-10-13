// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * [Calculated expression](../../expressions) validator.
 */
export class DivInputValidatorExpression<T extends DivInputValidatorExpressionProps = DivInputValidatorExpressionProps> {
    readonly _props?: Exact<DivInputValidatorExpressionProps, T>;

    readonly type = 'expression';
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * [Calculated expression](../../expressions) used as a value validity condition.
     */
    condition: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;

    constructor(props: Exact<DivInputValidatorExpressionProps, T>) {
        this.allow_empty = props.allow_empty;
        this.condition = props.condition;
        this.label_id = props.label_id;
        this.variable = props.variable;
    }
}

export interface DivInputValidatorExpressionProps {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * [Calculated expression](../../expressions) used as a value validity condition.
     */
    condition: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
}
