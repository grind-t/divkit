// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    IDivAbsoluteEdgeInsets,
} from './';

/**
 * Image in 9-patch format (https://developer.android.com/studio/write/draw9patch).
 */
export class DivNinePatchBackground<T extends DivNinePatchBackgroundProps = DivNinePatchBackgroundProps> {
    readonly _props?: Exact<DivNinePatchBackgroundProps, T>;

    readonly type = 'nine_patch_image';
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Margins that break the image into parts using the same rules as the CSS `border-image-slice`
     * property (https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice).
     */
    insets: Type<IDivAbsoluteEdgeInsets>;

    constructor(props: Exact<DivNinePatchBackgroundProps, T>) {
        this.image_url = props.image_url;
        this.insets = props.insets;
    }
}

export interface DivNinePatchBackgroundProps {
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Margins that break the image into parts using the same rules as the CSS `border-image-slice`
     * property (https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice).
     */
    insets: Type<IDivAbsoluteEdgeInsets>;
}
