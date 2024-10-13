// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Controls the timer.
 */
export class DivActionTimer<T extends DivActionTimerProps = DivActionTimerProps> {
    readonly _props?: Exact<DivActionTimerProps, T>;

    readonly type = 'timer';
    /**
     * Timer actions:`start` — starts the timer from a stopped state`stop`— stops the timer and
     * performs the `onEnd` action`pause` — pauses the timer, saves the current time`resume` —
     * restarts the timer after a pause`cancel` — interrupts the timer, resets the time`reset` —
     * cancels the timer, then starts it again
     */
    action: Type<DivActionTimerAction | DivExpression>;
    /**
     * Timer ID.
     */
    id: Type<string | DivExpression>;

    constructor(props: Exact<DivActionTimerProps, T>) {
        this.action = props.action;
        this.id = props.id;
    }
}

export interface DivActionTimerProps {
    /**
     * Timer actions:`start` — starts the timer from a stopped state`stop`— stops the timer and
     * performs the `onEnd` action`pause` — pauses the timer, saves the current time`resume` —
     * restarts the timer after a pause`cancel` — interrupts the timer, resets the time`reset` —
     * cancels the timer, then starts it again
     */
    action: Type<DivActionTimerAction | DivExpression>;
    /**
     * Timer ID.
     */
    id: Type<string | DivExpression>;
}

export type DivActionTimerAction =
    | 'start'
    | 'stop'
    | 'pause'
    | 'resume'
    | 'cancel'
    | 'reset';
