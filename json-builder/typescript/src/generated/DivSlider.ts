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
    DivDrawable,
    DivFontWeight,
    DivSize,
    DivSizeUnit,
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
    IDivPoint,
    IDivTooltip,
    IDivTransform,
    IDivTrigger,
    IDivVisibilityAction,
} from './';

/**
 * Slider for selecting a value in the range.
 */
export class DivSlider<T extends DivSliderProps = DivSliderProps> {
    readonly _props?: Exact<DivSliderProps, T>;

    readonly type = 'slider';
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
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
     * Maximum value. It must be greater than the minimum value.
     */
    max_value?: Type<number | DivExpression>;
    /**
     * Minimum value.
     */
    min_value?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Section style.
     *
     * Platforms: android, ios
     */
    ranges?: Type<NonEmptyArray<IDivSliderRange>>;
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
     * Accessibility settings for the second pointer.
     *
     * Platforms: web
     */
    secondary_value_accessibility?: Type<IDivAccessibility>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Style of the second pointer.
     */
    thumb_secondary_style?: Type<DivDrawable>;
    /**
     * Text style in the second pointer.
     */
    thumb_secondary_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the second pointer's current value.
     */
    thumb_secondary_value_variable?: Type<string>;
    /**
     * Style of the first pointer.
     */
    thumb_style: Type<DivDrawable>;
    /**
     * Text style in the first pointer.
     */
    thumb_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the pointer's current value.
     */
    thumb_value_variable?: Type<string>;
    /**
     * Style of active serifs.
     */
    tick_mark_active_style?: Type<DivDrawable>;
    /**
     * Style of inactive serifs.
     */
    tick_mark_inactive_style?: Type<DivDrawable>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style: Type<DivDrawable>;
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

    constructor(props: Exact<DivSliderProps, T>) {
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.max_value = props.max_value;
        this.min_value = props.min_value;
        this.paddings = props.paddings;
        this.ranges = props.ranges;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.secondary_value_accessibility = props.secondary_value_accessibility;
        this.selected_actions = props.selected_actions;
        this.thumb_secondary_style = props.thumb_secondary_style;
        this.thumb_secondary_text_style = props.thumb_secondary_text_style;
        this.thumb_secondary_value_variable = props.thumb_secondary_value_variable;
        this.thumb_style = props.thumb_style;
        this.thumb_text_style = props.thumb_text_style;
        this.thumb_value_variable = props.thumb_value_variable;
        this.tick_mark_active_style = props.tick_mark_active_style;
        this.tick_mark_inactive_style = props.tick_mark_inactive_style;
        this.tooltips = props.tooltips;
        this.track_active_style = props.track_active_style;
        this.track_inactive_style = props.track_inactive_style;
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

export interface DivSliderProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
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
     * Maximum value. It must be greater than the minimum value.
     */
    max_value?: Type<number | DivExpression>;
    /**
     * Minimum value.
     */
    min_value?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Section style.
     *
     * Platforms: android, ios
     */
    ranges?: Type<NonEmptyArray<IDivSliderRange>>;
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
     * Accessibility settings for the second pointer.
     *
     * Platforms: web
     */
    secondary_value_accessibility?: Type<IDivAccessibility>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Style of the second pointer.
     */
    thumb_secondary_style?: Type<DivDrawable>;
    /**
     * Text style in the second pointer.
     */
    thumb_secondary_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the second pointer's current value.
     */
    thumb_secondary_value_variable?: Type<string>;
    /**
     * Style of the first pointer.
     */
    thumb_style: Type<DivDrawable>;
    /**
     * Text style in the first pointer.
     */
    thumb_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the pointer's current value.
     */
    thumb_value_variable?: Type<string>;
    /**
     * Style of active serifs.
     */
    tick_mark_active_style?: Type<DivDrawable>;
    /**
     * Style of inactive serifs.
     */
    tick_mark_inactive_style?: Type<DivDrawable>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style: Type<DivDrawable>;
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

export interface IDivSliderRange {
    /**
     * End of section.
     */
    end?: Type<number | DivExpression>;
    /**
     * Section margins. Only uses horizontal margins.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Start of section.
     */
    start?: Type<number | DivExpression>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style?: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style?: Type<DivDrawable>;
}

export interface IDivSliderTextStyle {
    /**
     * Font size.
     */
    font_size: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * Shift relative to the center.
     */
    offset?: Type<IDivPoint>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
}
