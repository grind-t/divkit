// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

/**
 * Mirrors an image if the system uses RTL (Right-to-Left) text direction.
 */
export class DivFilterRtlMirror<T extends DivFilterRtlMirrorProps = DivFilterRtlMirrorProps> {
    readonly _props?: Exact<DivFilterRtlMirrorProps, T>;

    readonly type = 'rtl_mirror';

    constructor(props?: Exact<DivFilterRtlMirrorProps, T>) {
    }
}

export interface DivFilterRtlMirrorProps {
}
