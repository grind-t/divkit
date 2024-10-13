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
export class DivDefaultIndicatorItemPlacement<T extends DivDefaultIndicatorItemPlacementProps = DivDefaultIndicatorItemPlacementProps> {
    readonly _props?: Exact<DivDefaultIndicatorItemPlacementProps, T>;

    readonly type = 'default';
    /**
     * Spacing between indicator centers.
     */
    space_between_centers?: Type<DivFixedSize>;

    constructor(props?: Exact<DivDefaultIndicatorItemPlacementProps, T>) {
        this.space_between_centers = props?.space_between_centers;
    }
}

export interface DivDefaultIndicatorItemPlacementProps {
    /**
     * Spacing between indicator centers.
     */
    space_between_centers?: Type<DivFixedSize>;
}
