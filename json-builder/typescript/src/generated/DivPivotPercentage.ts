// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Location of the coordinate of the rotation axis as a percentage relative to the element size.
 */
export class DivPivotPercentage<T extends DivPivotPercentageProps = DivPivotPercentageProps> {
    readonly _props?: Exact<DivPivotPercentageProps, T>;

    readonly type = 'pivot-percentage';
    /**
     * Coordinate value as a percentage.
     */
    value: Type<number | DivExpression>;

    constructor(props: Exact<DivPivotPercentageProps, T>) {
        this.value = props.value;
    }
}

export interface DivPivotPercentageProps {
    /**
     * Coordinate value as a percentage.
     */
    value: Type<number | DivExpression>;
}
