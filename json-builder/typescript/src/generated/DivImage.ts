// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivAlignmentHorizontal,
    DivAlignmentVertical,
    DivAnimator,
    DivAppearanceTransition,
    DivBackground,
    DivBlendMode,
    DivChangeTransition,
    DivFadeTransition,
    DivFilter,
    DivImageScale,
    DivSize,
    DivTransitionTrigger,
    DivVariable,
    DivVisibility,
    IDivAccessibility,
    IDivAction,
    IDivAnimation,
    IDivAspect,
    IDivBorder,
    IDivDisappearAction,
    IDivEdgeInsets,
    IDivExtension,
    IDivFocus,
    IDivFunction,
    IDivLayoutProvider,
    IDivTooltip,
    IDivTransform,
    IDivTrigger,
    IDivVisibilityAction,
} from './';

/**
 * Image.
 */
export class DivImage<T extends DivImageProps = DivImageProps> {
    readonly _props?: Exact<DivImageProps, T>;

    readonly type = 'image';
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: not supported
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Transparency animation when loading an image.
     *
     * Platforms: android, ios, web
     */
    appearance_animation?: Type<DivFadeTransition>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in 
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * It sets the priority of displaying the preview — the preview is decoded in the main stream and
     * displayed as the first frame. Use the parameter carefully — it will worsen the preview display
     * time and can worsen the application launch time.
     *
     * Platforms: android, ios
     */
    high_priority_preview_show?: Type<IntBoolean | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;

    constructor(props: Exact<DivImageProps, T>) {
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.appearance_animation = props.appearance_animation;
        this.aspect = props.aspect;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.extensions = props.extensions;
        this.filters = props.filters;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.high_priority_preview_show = props.high_priority_preview_show;
        this.id = props.id;
        this.image_url = props.image_url;
        this.layout_provider = props.layout_provider;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.placeholder_color = props.placeholder_color;
        this.preload_required = props.preload_required;
        this.preview = props.preview;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.scale = props.scale;
        this.selected_actions = props.selected_actions;
        this.tint_color = props.tint_color;
        this.tint_mode = props.tint_mode;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

export interface DivImageProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: not supported
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Transparency animation when loading an image.
     *
     * Platforms: android, ios, web
     */
    appearance_animation?: Type<DivFadeTransition>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in 
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * It sets the priority of displaying the preview — the preview is decoded in the main stream and
     * displayed as the first frame. Use the parameter carefully — it will worsen the preview display
     * time and can worsen the application launch time.
     *
     * Platforms: android, ios
     */
    high_priority_preview_show?: Type<IntBoolean | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
