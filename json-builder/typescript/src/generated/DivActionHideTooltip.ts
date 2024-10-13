// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Hides the tooltip.
 */
export class DivActionHideTooltip<T extends DivActionHideTooltipProps = DivActionHideTooltipProps> {
    readonly _props?: Exact<DivActionHideTooltipProps, T>;

    readonly type = 'hide_tooltip';
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;

    constructor(props: Exact<DivActionHideTooltipProps, T>) {
        this.id = props.id;
    }
}

export interface DivActionHideTooltipProps {
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
}
