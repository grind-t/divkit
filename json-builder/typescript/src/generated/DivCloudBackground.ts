// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivFixedSize,
    IDivEdgeInsets,
} from './';

/**
 * Cloud text background. Lines draws a rectangular background with the specified color and
 * rounded corners.
 */
export class DivCloudBackground<T extends DivCloudBackgroundProps = DivCloudBackgroundProps> {
    readonly _props?: Exact<DivCloudBackgroundProps, T>;

    readonly type = 'cloud';
    /**
     * Fill color.
     */
    color: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius: Type<DivFixedSize>;
    /**
     * Margins between line bounds and background.
     */
    padding?: Type<IDivEdgeInsets>;

    constructor(props: Exact<DivCloudBackgroundProps, T>) {
        this.color = props.color;
        this.corner_radius = props.corner_radius;
        this.padding = props.padding;
    }
}

export interface DivCloudBackgroundProps {
    /**
     * Fill color.
     */
    color: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius: Type<DivFixedSize>;
    /**
     * Margins between line bounds and background.
     */
    padding?: Type<IDivEdgeInsets>;
}
