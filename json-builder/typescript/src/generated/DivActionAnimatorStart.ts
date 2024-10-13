// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivAnimationDirection,
    DivAnimationInterpolator,
    DivCount,
    DivTypedValue,
} from './';

/**
 * Launches the specified animator.
 */
export class DivActionAnimatorStart<T extends DivActionAnimatorStartProps = DivActionAnimatorStartProps> {
    readonly _props?: Exact<DivActionAnimatorStartProps, T>;

    readonly type = 'animator_start';
    /**
     * ID of the animator launched.
     */
    animator_id: Type<string>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set after the animation finishes.
     */
    end_value?: Type<DivTypedValue>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set before the animation begins.
     */
    start_value?: Type<DivTypedValue>;

    constructor(props: Exact<DivActionAnimatorStartProps, T>) {
        this.animator_id = props.animator_id;
        this.direction = props.direction;
        this.duration = props.duration;
        this.end_value = props.end_value;
        this.interpolator = props.interpolator;
        this.repeat_count = props.repeat_count;
        this.start_delay = props.start_delay;
        this.start_value = props.start_value;
    }
}

export interface DivActionAnimatorStartProps {
    /**
     * ID of the animator launched.
     */
    animator_id: Type<string>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set after the animation finishes.
     */
    end_value?: Type<DivTypedValue>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set before the animation begins.
     */
    start_value?: Type<DivTypedValue>;
}
