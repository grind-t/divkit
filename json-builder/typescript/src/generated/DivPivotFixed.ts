// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivSizeUnit,
} from './';

/**
 * Fixed coordinates of the rotation axis.
 */
export class DivPivotFixed<T extends DivPivotFixedProps = DivPivotFixedProps> {
    readonly _props?: Exact<DivPivotFixedProps, T>;

    readonly type = 'pivot-fixed';
    /**
     * Measurement unit. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value?: Type<number | DivExpression>;

    constructor(props?: Exact<DivPivotFixedProps, T>) {
        this.unit = props?.unit;
        this.value = props?.value;
    }
}

export interface DivPivotFixedProps {
    /**
     * Measurement unit. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value?: Type<number | DivExpression>;
}
