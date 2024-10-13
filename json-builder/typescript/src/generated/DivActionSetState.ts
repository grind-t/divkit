// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Applies a new appearance to the content in `div-state'.
 */
export class DivActionSetState<T extends DivActionSetStateProps = DivActionSetStateProps> {
    readonly _props?: Exact<DivActionSetStateProps, T>;

    readonly type = 'set_state';
    /**
     * The path of the state inside `state` that needs to be activated. Set in the format
     * `div_data_state_id/id/state_id'. Can be hierarchical:
     * `div_data_state_id/id_1/state_id_1/../id_n/state_id_n`. Consists of:`div_data_state_id` — the
     * numeric value of the `state_id` of the `state` object in `data`'id` — the `id` value of the
     * `state` object`state_id` — the `state_id` value of the `state` object in `state`
     */
    state_id: Type<string | DivExpression>;
    /**
     * Indicates a state change:`true` — the change is temporary and will switch to the original one
     * (default value) when the element is recreated`false` — the change is permanent
     */
    temporary?: Type<boolean | DivExpression>;

    constructor(props: Exact<DivActionSetStateProps, T>) {
        this.state_id = props.state_id;
        this.temporary = props.temporary;
    }
}

export interface DivActionSetStateProps {
    /**
     * The path of the state inside `state` that needs to be activated. Set in the format
     * `div_data_state_id/id/state_id'. Can be hierarchical:
     * `div_data_state_id/id_1/state_id_1/../id_n/state_id_n`. Consists of:`div_data_state_id` — the
     * numeric value of the `state_id` of the `state` object in `data`'id` — the `id` value of the
     * `state` object`state_id` — the `state_id` value of the `state` object in `state`
     */
    state_id: Type<string | DivExpression>;
    /**
     * Indicates a state change:`true` — the change is temporary and will switch to the original one
     * (default value) when the element is recreated`false` — the change is permanent
     */
    temporary?: Type<boolean | DivExpression>;
}
