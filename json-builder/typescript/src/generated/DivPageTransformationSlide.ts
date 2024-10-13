// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivAnimationInterpolator,
} from './';

/**
 * Pages move without overlapping during pager scrolling.
 */
export class DivPageTransformationSlide<T extends DivPageTransformationSlideProps = DivPageTransformationSlideProps> {
    readonly _props?: Exact<DivPageTransformationSlideProps, T>;

    readonly type = 'slide';
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;

    constructor(props?: Exact<DivPageTransformationSlideProps, T>) {
        this.interpolator = props?.interpolator;
        this.next_page_alpha = props?.next_page_alpha;
        this.next_page_scale = props?.next_page_scale;
        this.previous_page_alpha = props?.previous_page_alpha;
        this.previous_page_scale = props?.previous_page_scale;
    }
}

export interface DivPageTransformationSlideProps {
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;
}
