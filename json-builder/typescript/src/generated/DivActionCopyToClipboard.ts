// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivActionCopyToClipboardContent,
} from './';

/**
 * Copies data to the clipboard.
 */
export class DivActionCopyToClipboard<T extends DivActionCopyToClipboardProps = DivActionCopyToClipboardProps> {
    readonly _props?: Exact<DivActionCopyToClipboardProps, T>;

    readonly type = 'copy_to_clipboard';
    content: Type<DivActionCopyToClipboardContent>;

    constructor(props: Exact<DivActionCopyToClipboardProps, T>) {
        this.content = props.content;
    }
}

export interface DivActionCopyToClipboardProps {
    content: Type<DivActionCopyToClipboardContent>;
}
