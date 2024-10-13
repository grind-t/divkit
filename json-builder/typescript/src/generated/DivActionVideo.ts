// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Manages video playback.
 */
export class DivActionVideo<T extends DivActionVideoProps = DivActionVideoProps> {
    readonly _props?: Exact<DivActionVideoProps, T>;

    readonly type = 'video';
    /**
     * Defines the action for the video: `start` — starts playing the video if the video is ready to
     * be played, or schedules playback`pause' — stops the video playback
     */
    action: Type<DivActionVideoAction | DivExpression>;
    /**
     * Video ID.
     */
    id: Type<string | DivExpression>;

    constructor(props: Exact<DivActionVideoProps, T>) {
        this.action = props.action;
        this.id = props.id;
    }
}

export interface DivActionVideoProps {
    /**
     * Defines the action for the video: `start` — starts playing the video if the video is ready to
     * be played, or schedules playback`pause' — stops the video playback
     */
    action: Type<DivActionVideoAction | DivExpression>;
    /**
     * Video ID.
     */
    id: Type<string | DivExpression>;
}

export type DivActionVideoAction =
    | 'start'
    | 'pause';
