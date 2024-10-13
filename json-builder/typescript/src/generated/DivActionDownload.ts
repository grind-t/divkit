// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    IDivAction,
} from './';

/**
 * Loads additional data in `div-patch` format and updates the current element.
 */
export class DivActionDownload<T extends DivActionDownloadProps = DivActionDownloadProps> {
    readonly _props?: Exact<DivActionDownloadProps, T>;

    readonly type = 'download';
    /**
     * Actions in case of unsuccessful loading if the host reported it or the waiting time expired.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful loading.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Link for receiving changes.
     */
    url: Type<string | DivExpression>;

    constructor(props: Exact<DivActionDownloadProps, T>) {
        this.on_fail_actions = props.on_fail_actions;
        this.on_success_actions = props.on_success_actions;
        this.url = props.url;
    }
}

export interface DivActionDownloadProps {
    /**
     * Actions in case of unsuccessful loading if the host reported it or the waiting time expired.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful loading.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Link for receiving changes.
     */
    url: Type<string | DivExpression>;
}
