// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Filter based on regular expressions.
 */
export class DivInputFilterRegex<T extends DivInputFilterRegexProps = DivInputFilterRegexProps> {
    readonly _props?: Exact<DivInputFilterRegexProps, T>;

    readonly type = 'regex';
    /**
     * Regular expression (pattern) that the entered value must match.
     */
    pattern: Type<string | DivExpression>;

    constructor(props: Exact<DivInputFilterRegexProps, T>) {
        this.pattern = props.pattern;
    }
}

export interface DivInputFilterRegexProps {
    /**
     * Regular expression (pattern) that the entered value must match.
     */
    pattern: Type<string | DivExpression>;
}
