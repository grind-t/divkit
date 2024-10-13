// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    IDivAction,
} from './';

/**
 * Timer.
 */
export interface IDivTimer {
    /**
     * Timer duration in milliseconds. If the parameter is `0` or not specified, the timer runs
     * indefinitely (until the timer stop event occurs).
     */
    duration?: Type<number | DivExpression>;
    /**
     * Actions performed when the timer ends: when the timer has counted to the `duration` value or
     * the `div-action://timer?action=stop&id=<id>` command has been received.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Timer ID. Must be unique. Used when calling actions for the selected timer, for example:
     * start, stop.
     */
    id: Type<string>;
    /**
     * Actions that are performed on each count of the timer.
     */
    tick_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Duration of time intervals in milliseconds between counts. If the parameter is not specified,
     * the timer counts down from `0` to `duration` without calling `tick_actions`.
     */
    tick_interval?: Type<number | DivExpression>;
    /**
     * Name of the variable where the current timer value is stored. Updated on each count or when
     * the timer commands are called (start, stop, and so on), except the cancel command.
     */
    value_variable?: Type<string>;
}
