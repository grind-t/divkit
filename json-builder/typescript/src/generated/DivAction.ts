// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivActionTyped,
    IDivDownloadCallbacks,
} from './';

/**
 * It defines an action when clicking on an element.
 */
export interface IDivAction {
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
     * URL for logging.
     */
    log_url?: Type<string | DivExpression>;
    /**
     * Context menu.
     */
    menu_items?: Type<NonEmptyArray<IDivActionMenuItem>>;
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
    /**
     * The tab in which the URL must be opened.
     *
     * Platforms: web
     */
    target?: Type<DivActionTarget | DivExpression>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
}

export type DivActionTarget =
    | '_self'
    | '_blank';

export interface IDivActionMenuItem {
    /**
     * One action when clicking on a menu item. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Multiple actions when clicking on a menu item.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Menu item title.
     */
    text: Type<string | DivExpression>;
}
