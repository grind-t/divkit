// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivAnimationDirection,
    DivAnimationInterpolator,
    DivCount,
    IDivAction,
} from './';

export interface IDivAnimatorBase {
    /**
     * Actions to be performed if the animator is canceled. For example, when a command with the type
     * `animator_stop` is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions to be performed after the animator finishes.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animator ID.
     */
    id: Type<string>;
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
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
}
