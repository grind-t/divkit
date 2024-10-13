// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivFixedSize,
} from './';

/**
 * Element size adjusts to a parent element.
 */
export class DivStretchIndicatorItemPlacement<T extends DivStretchIndicatorItemPlacementProps = DivStretchIndicatorItemPlacementProps> {
    readonly _props?: Exact<DivStretchIndicatorItemPlacementProps, T>;

    readonly type = 'stretch';
    /**
     * Spacing between indicator centers.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Maximum number of visible indicators.
     */
    max_visible_items?: Type<number | DivExpression>;

    constructor(props?: Exact<DivStretchIndicatorItemPlacementProps, T>) {
        this.item_spacing = props?.item_spacing;
        this.max_visible_items = props?.max_visible_items;
    }
}

export interface DivStretchIndicatorItemPlacementProps {
    /**
     * Spacing between indicator centers.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Maximum number of visible indicators.
     */
    max_visible_items?: Type<number | DivExpression>;
}
