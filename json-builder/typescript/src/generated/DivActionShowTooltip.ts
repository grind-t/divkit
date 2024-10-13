// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Shows the tooltip.
 */
export class DivActionShowTooltip<T extends DivActionShowTooltipProps = DivActionShowTooltipProps> {
    readonly _props?: Exact<DivActionShowTooltipProps, T>;

    readonly type = 'show_tooltip';
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
    /**
     * Sets whether the tooltip can be shown again after it’s closed.
     */
    multiple?: Type<boolean | DivExpression>;

    constructor(props: Exact<DivActionShowTooltipProps, T>) {
        this.id = props.id;
        this.multiple = props.multiple;
    }
}

export interface DivActionShowTooltipProps {
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
    /**
     * Sets whether the tooltip can be shown again after it’s closed.
     */
    multiple?: Type<boolean | DivExpression>;
}
