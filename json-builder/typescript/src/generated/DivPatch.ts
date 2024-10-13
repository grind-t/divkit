// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    Div,
    IDivAction,
} from './';

/**
 * Edits the element.
 */
export interface IDivPatch {
    /**
     * Element changes.
     */
    changes: NonEmptyArray<IDivPatchChange>;
    /**
     * Procedure for applying changes:`transactional` — if an error occurs during application of at
     * least one element, the changes aren't applied.`partial` — all possible changes are applied. If
     * there are errors, they are reported.
     *
     * Platforms: android, web
     */
    mode?: DivPatchMode | DivExpression;
    /**
     * Actions to perform after changes are applied.
     *
     * Platforms: android, ios, web
     */
    on_applied_actions?: NonEmptyArray<IDivAction>;
    /**
     * Actions to perform if there’s an error when applying changes in transaction mode.
     *
     * Platforms: android, web
     */
    on_failed_actions?: NonEmptyArray<IDivAction>;
}

export type DivPatchMode =
    | 'transactional'
    | 'partial';

export interface IDivPatchChange {
    /**
     * ID of an element to be replaced or removed.
     */
    id: Type<string>;
    /**
     * Elements to be inserted. If the parameter isn't specified, the element will be removed.
     */
    items?: Type<NonEmptyArray<Div>>;
}
