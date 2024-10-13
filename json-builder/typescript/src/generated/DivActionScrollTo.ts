// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivActionScrollDestination,
} from './';

/**
 * Scrolls or switches container to given destination provided by `destination`.
 */
export class DivActionScrollTo<T extends DivActionScrollToProps = DivActionScrollToProps> {
    readonly _props?: Exact<DivActionScrollToProps, T>;

    readonly type = 'scroll_to';
    /**
     * If `true` (default value) scroll will be animated, else not.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Specifies destination of scroll:`index` - scroll or switch to item with index provided by
     * `value`;`offset` - scroll to position measured in `dp` from container's start and provided by
     * `value`. Applicable only in `gallery`;`start` - scrolls to start of container;`end` - scrolls
     * to end of container..
     */
    destination: Type<DivActionScrollDestination>;
    /**
     * Identifier of the view that is going to be manipulated.
     */
    id: Type<string | DivExpression>;

    constructor(props: Exact<DivActionScrollToProps, T>) {
        this.animated = props.animated;
        this.destination = props.destination;
        this.id = props.id;
    }
}

export interface DivActionScrollToProps {
    /**
     * If `true` (default value) scroll will be animated, else not.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Specifies destination of scroll:`index` - scroll or switch to item with index provided by
     * `value`;`offset` - scroll to position measured in `dp` from container's start and provided by
     * `value`. Applicable only in `gallery`;`start` - scrolls to start of container;`end` - scrolls
     * to end of container..
     */
    destination: Type<DivActionScrollDestination>;
    /**
     * Identifier of the view that is going to be manipulated.
     */
    id: Type<string | DivExpression>;
}
