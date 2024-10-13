// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Scrolls scrollable container from current position by `item_count` or by `offset`, if both
 * provided scroll action will be combined, negative numbers associated with backward scroll.
 */
export class DivActionScrollBy<T extends DivActionScrollByProps = DivActionScrollByProps> {
    readonly _props?: Exact<DivActionScrollByProps, T>;

    readonly type = 'scroll_by';
    /**
     * If `true` (default value) scroll will be animated, else not.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Identifier of the view that is going to be manipulated.
     */
    id: Type<string | DivExpression>;
    /**
     * Count of container items to scroll, negative value is associated with backward scroll.
     */
    item_count?: Type<number | DivExpression>;
    /**
     * Distance to scroll measured in `dp` from current position, negative value is associated with
     * backward scroll. Applicable only in `gallery`.
     */
    offset?: Type<number | DivExpression>;
    /**
     * Specifies how navigation will occur when the boundary elements are reached:`clamp` —
     * Transition will stop at the boundary element (default value);`ring` — Transition will be to
     * the beginning or the end depending on the current element.
     */
    overflow?: Type<DivActionScrollByOverflow | DivExpression>;

    constructor(props: Exact<DivActionScrollByProps, T>) {
        this.animated = props.animated;
        this.id = props.id;
        this.item_count = props.item_count;
        this.offset = props.offset;
        this.overflow = props.overflow;
    }
}

export interface DivActionScrollByProps {
    /**
     * If `true` (default value) scroll will be animated, else not.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Identifier of the view that is going to be manipulated.
     */
    id: Type<string | DivExpression>;
    /**
     * Count of container items to scroll, negative value is associated with backward scroll.
     */
    item_count?: Type<number | DivExpression>;
    /**
     * Distance to scroll measured in `dp` from current position, negative value is associated with
     * backward scroll. Applicable only in `gallery`.
     */
    offset?: Type<number | DivExpression>;
    /**
     * Specifies how navigation will occur when the boundary elements are reached:`clamp` —
     * Transition will stop at the boundary element (default value);`ring` — Transition will be to
     * the beginning or the end depending on the current element.
     */
    overflow?: Type<DivActionScrollByOverflow | DivExpression>;
}

export type DivActionScrollByOverflow =
    | 'clamp'
    | 'ring';
