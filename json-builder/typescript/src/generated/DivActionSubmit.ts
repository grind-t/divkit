// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    IDivAction,
} from './';

/**
 * Sends variables from the container via a url. The data sending configuration can be determined
 * by the host application. By default, variables are passed in body in json format, the request
 * method is POST.
 */
export class DivActionSubmit<T extends DivActionSubmitProps = DivActionSubmitProps> {
    readonly _props?: Exact<DivActionSubmitProps, T>;

    readonly type = 'submit';
    /**
     * The identifier of the container that contains variables to submit.
     */
    container_id: Type<string | DivExpression>;
    /**
     * Actions in case of unsuccessful submit.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful submit.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The HTTP request parameters that are used to configure how data is sent.
     */
    request: Type<IDivActionSubmitRequest>;

    constructor(props: Exact<DivActionSubmitProps, T>) {
        this.container_id = props.container_id;
        this.on_fail_actions = props.on_fail_actions;
        this.on_success_actions = props.on_success_actions;
        this.request = props.request;
    }
}

export interface DivActionSubmitProps {
    /**
     * The identifier of the container that contains variables to submit.
     */
    container_id: Type<string | DivExpression>;
    /**
     * Actions in case of unsuccessful submit.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful submit.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The HTTP request parameters that are used to configure how data is sent.
     */
    request: Type<IDivActionSubmitRequest>;
}

/**
 * The HTTP request parameters that are used to configure how data is sent.
 */
export interface IDivActionSubmitRequest {
    /**
     * The HTTP request headers.
     */
    headers?: Type<NonEmptyArray<IRequestHeader>>;
    /**
     * The HTTP request method.
     */
    method?: Type<RequestMethod | DivExpression>;
    /**
     * The url to which data from the container is sent.
     */
    url: Type<string | DivExpression>;
}

export type RequestMethod =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE'
    | 'HEAD'
    | 'OPTIONS';

export interface IRequestHeader {
    name: Type<string | DivExpression>;
    value: Type<string | DivExpression>;
}
