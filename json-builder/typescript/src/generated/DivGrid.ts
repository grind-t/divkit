// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    Div,
    DivAlignmentHorizontal,
    DivAlignmentVertical,
    DivAnimator,
    DivAppearanceTransition,
    DivBackground,
    DivChangeTransition,
    DivSize,
    DivTransitionTrigger,
    DivVariable,
    DivVisibility,
    IDivAccessibility,
    IDivAction,
    IDivAnimation,
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
 * A grid with an option to merge cells vertically and horizontally.
 */
export class DivGrid<T extends DivGridProps = DivGridProps> {
    readonly _props?: Exact<DivGridProps, T>;

    readonly type = 'grid';
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
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns.
     */
    column_count: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal alignment of grid contents.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of grid contents.
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
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Contents.
     */
    items?: Type<NonEmptyArray<Div>>;
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
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
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

    constructor(props: Exact<DivGridProps, T>) {
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_count = props.column_count;
        this.column_span = props.column_span;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.items = props.items;
        this.layout_provider = props.layout_provider;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
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

export interface DivGridProps {
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
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns.
     */
    column_count: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal alignment of grid contents.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of grid contents.
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
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Contents.
     */
    items?: Type<NonEmptyArray<Div>>;
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
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
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
