// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivActionTyped,
    IDivDownloadCallbacks,
} from './';

export interface IDivSightAction {
    /**
     * Callbacks that are called after [data loading](../../interaction#loading-data).
     *
     * Platforms: android, ios, web
     */
    download_callbacks?: Type<IDivDownloadCallbacks>;
    /**
     * The parameter disables the action. Disabled actions stop listening to their associated event
     * (clicks, changes in visibility, and so on).
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Logging ID.
     */
    log_id: Type<string | DivExpression>;
    /**
     * Limit on the number of loggings. If `0`, the limit is removed.
     */
    log_limit?: Type<number | DivExpression>;
    /**
     * Additional parameters, passed to the host application.
     */
    payload?: Type<{}>;
    /**
     * Referer URL for logging.
     *
     * Platforms: android, ios
     */
    referer?: Type<string | DivExpression>;
    /**
     * The ID of the element within which the specified action will be performed.
     *
     * Platforms: not supported
     */
    scope_id?: Type<string>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
}
