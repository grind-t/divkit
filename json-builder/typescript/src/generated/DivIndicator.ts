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
    DivChangeTransition,
    DivFixedSize,
    DivIndicatorItemPlacement,
    DivRoundedRectangleShape,
    DivShape,
    DivSize,
    DivTransitionTrigger,
    DivVariable,
    DivVisibility,
    IDivAccessibility,
    IDivAction,
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
 * Progress indicator for [pager](div-pager.md).
 */
export class DivIndicator<T extends DivIndicatorProps = DivIndicatorProps> {
    readonly _props?: Exact<DivIndicatorProps, T>;

    readonly type = 'indicator';
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Active indicator color.
     *
     * @deprecated
     */
    active_item_color?: Type<string | DivExpression>;
    /**
     * A size multiplier for an active indicator.
     *
     * @deprecated
     */
    active_item_size?: Type<number | DivExpression>;
    /**
     * Active indicator shape.
     */
    active_shape?: Type<DivRoundedRectangleShape>;
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
     * Animation of switching between indicators.
     *
     * Platforms: android, ios
     */
    animation?: Type<DivIndicatorAnimation | DivExpression>;
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
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
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
     * Indicator color.
     *
     * @deprecated
     */
    inactive_item_color?: Type<string | DivExpression>;
    /**
     * Inactive indicator shape, minimum size. Used when all the indicators don't fit on the screen.
     *
     * Platforms: android, ios
     */
    inactive_minimum_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator shape.
     */
    inactive_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator items placement mode:Default: Indicators' width is fixed and defined by the `shape`
     * parameters.Stretch: Indicators are expanded to fill the entire width.
     */
    items_placement?: Type<DivIndicatorItemPlacement>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * A size multiplier for a minimal indicator. It is used when the required number of indicators
     * don't fit on the screen.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    minimum_item_size?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID of the pager that is a data source for an indicator.
     */
    pager_id?: Type<string>;
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
     * Indicator shape.
     *
     * @deprecated
     */
    shape?: Type<DivShape>;
    /**
     * Spacing between indicator centers.
     *
     * @deprecated
     */
    space_between_centers?: Type<DivFixedSize>;
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

    constructor(props?: Exact<DivIndicatorProps, T>) {
        this.accessibility = props?.accessibility;
        this.active_item_color = props?.active_item_color;
        this.active_item_size = props?.active_item_size;
        this.active_shape = props?.active_shape;
        this.alignment_horizontal = props?.alignment_horizontal;
        this.alignment_vertical = props?.alignment_vertical;
        this.alpha = props?.alpha;
        this.animation = props?.animation;
        this.animators = props?.animators;
        this.background = props?.background;
        this.border = props?.border;
        this.column_span = props?.column_span;
        this.disappear_actions = props?.disappear_actions;
        this.extensions = props?.extensions;
        this.focus = props?.focus;
        this.functions = props?.functions;
        this.height = props?.height;
        this.id = props?.id;
        this.inactive_item_color = props?.inactive_item_color;
        this.inactive_minimum_shape = props?.inactive_minimum_shape;
        this.inactive_shape = props?.inactive_shape;
        this.items_placement = props?.items_placement;
        this.layout_provider = props?.layout_provider;
        this.margins = props?.margins;
        this.minimum_item_size = props?.minimum_item_size;
        this.paddings = props?.paddings;
        this.pager_id = props?.pager_id;
        this.reuse_id = props?.reuse_id;
        this.row_span = props?.row_span;
        this.selected_actions = props?.selected_actions;
        this.shape = props?.shape;
        this.space_between_centers = props?.space_between_centers;
        this.tooltips = props?.tooltips;
        this.transform = props?.transform;
        this.transition_change = props?.transition_change;
        this.transition_in = props?.transition_in;
        this.transition_out = props?.transition_out;
        this.transition_triggers = props?.transition_triggers;
        this.variable_triggers = props?.variable_triggers;
        this.variables = props?.variables;
        this.visibility = props?.visibility;
        this.visibility_action = props?.visibility_action;
        this.visibility_actions = props?.visibility_actions;
        this.width = props?.width;
    }
}

export interface DivIndicatorProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Active indicator color.
     *
     * @deprecated
     */
    active_item_color?: Type<string | DivExpression>;
    /**
     * A size multiplier for an active indicator.
     *
     * @deprecated
     */
    active_item_size?: Type<number | DivExpression>;
    /**
     * Active indicator shape.
     */
    active_shape?: Type<DivRoundedRectangleShape>;
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
     * Animation of switching between indicators.
     *
     * Platforms: android, ios
     */
    animation?: Type<DivIndicatorAnimation | DivExpression>;
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
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
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
     * Indicator color.
     *
     * @deprecated
     */
    inactive_item_color?: Type<string | DivExpression>;
    /**
     * Inactive indicator shape, minimum size. Used when all the indicators don't fit on the screen.
     *
     * Platforms: android, ios
     */
    inactive_minimum_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator shape.
     */
    inactive_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator items placement mode:Default: Indicators' width is fixed and defined by the `shape`
     * parameters.Stretch: Indicators are expanded to fill the entire width.
     */
    items_placement?: Type<DivIndicatorItemPlacement>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * A size multiplier for a minimal indicator. It is used when the required number of indicators
     * don't fit on the screen.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    minimum_item_size?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID of the pager that is a data source for an indicator.
     */
    pager_id?: Type<string>;
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
     * Indicator shape.
     *
     * @deprecated
     */
    shape?: Type<DivShape>;
    /**
     * Spacing between indicator centers.
     *
     * @deprecated
     */
    space_between_centers?: Type<DivFixedSize>;
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

export type DivIndicatorAnimation =
    | 'scale'
    | 'worm'
    | 'slider';
