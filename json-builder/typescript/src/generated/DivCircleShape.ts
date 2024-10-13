// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivFixedSize,
    IDivStroke,
} from './';

/**
 * Circle.
 */
export class DivCircleShape<T extends DivCircleShapeProps = DivCircleShapeProps> {
    readonly _props?: Exact<DivCircleShapeProps, T>;

    readonly type = 'circle';
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Radius.
     */
    radius?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;

    constructor(props?: Exact<DivCircleShapeProps, T>) {
        this.background_color = props?.background_color;
        this.radius = props?.radius;
        this.stroke = props?.stroke;
    }
}

export interface DivCircleShapeProps {
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Radius.
     */
    radius?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}
