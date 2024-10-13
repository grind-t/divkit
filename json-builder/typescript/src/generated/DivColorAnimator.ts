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

/**
 * Color animator.
 */
export class DivColorAnimator<T extends DivColorAnimatorProps = DivColorAnimatorProps> {
    readonly _props?: Exact<DivColorAnimatorProps, T>;

    readonly type = 'color_animator';
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
     * The value the variable will have when the animation ends.
     */
    end_value: Type<string | DivExpression>;
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
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<string | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;

    constructor(props: Exact<DivColorAnimatorProps, T>) {
        this.cancel_actions = props.cancel_actions;
        this.direction = props.direction;
        this.duration = props.duration;
        this.end_actions = props.end_actions;
        this.end_value = props.end_value;
        this.id = props.id;
        this.interpolator = props.interpolator;
        this.repeat_count = props.repeat_count;
        this.start_delay = props.start_delay;
        this.start_value = props.start_value;
        this.variable_name = props.variable_name;
    }
}

export interface DivColorAnimatorProps {
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
     * The value the variable will have when the animation ends.
     */
    end_value: Type<string | DivExpression>;
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
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<string | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
}
