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
    DivFixedSize,
    DivFontWeight,
    DivSize,
    DivSizeUnit,
    DivTransitionTrigger,
    DivVariable,
    DivVisibility,
    IDivAccessibility,
    IDivAction,
    IDivBorder,
    IDivCornersRadius,
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
 * Tabs. Height of the first tab is determined by its contents, and height of the remaining
 * [depends on the platform](../../location#tabs).
 */
export class DivTabs<T extends DivTabsProps = DivTabsProps> {
    readonly _props?: Exact<DivTabsProps, T>;

    readonly type = 'tabs';
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
     * Updating height when changing the active element. In the browser, the value is always `true`.
     *
     * Platforms: android, ios
     */
    dynamic_height?: Type<IntBoolean | DivExpression>;
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
     * A separating line between tabs and contents.
     */
    has_separator?: Type<IntBoolean | DivExpression>;
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
     * Tabs. Transition between tabs can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current tab with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next tab inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous tab inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items: Type<NonEmptyArray<IDivTabsItem>>;
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
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, tabs won't transmit the scroll gesture to the parent element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
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
     * Ordinal number of the tab that will be opened by default.
     */
    selected_tab?: Type<number | DivExpression>;
    /**
     * Separator color.
     */
    separator_color?: Type<string | DivExpression>;
    /**
     * Indents from the separating line. Not used if `has_separator = false`.
     */
    separator_paddings?: Type<IDivEdgeInsets>;
    /**
     * Switching tabs by scrolling through the contents.
     */
    switch_tabs_by_content_swipe_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Design style of separators between tab titles.
     *
     * Platforms: android
     */
    tab_title_delimiter?: Type<IDivTabsTabTitleDelimiter>;
    /**
     * Design style of tab titles.
     */
    tab_title_style?: Type<IDivTabsTabTitleStyle>;
    /**
     * Indents in the tab name.
     */
    title_paddings?: Type<IDivEdgeInsets>;
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

    constructor(props: Exact<DivTabsProps, T>) {
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.dynamic_height = props.dynamic_height;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.has_separator = props.has_separator;
        this.height = props.height;
        this.id = props.id;
        this.items = props.items;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.restrict_parent_scroll = props.restrict_parent_scroll;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.selected_tab = props.selected_tab;
        this.separator_color = props.separator_color;
        this.separator_paddings = props.separator_paddings;
        this.switch_tabs_by_content_swipe_enabled = props.switch_tabs_by_content_swipe_enabled;
        this.tab_title_delimiter = props.tab_title_delimiter;
        this.tab_title_style = props.tab_title_style;
        this.title_paddings = props.title_paddings;
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

export interface DivTabsProps {
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
     * Updating height when changing the active element. In the browser, the value is always `true`.
     *
     * Platforms: android, ios
     */
    dynamic_height?: Type<IntBoolean | DivExpression>;
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
     * A separating line between tabs and contents.
     */
    has_separator?: Type<IntBoolean | DivExpression>;
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
     * Tabs. Transition between tabs can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current tab with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next tab inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous tab inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items: Type<NonEmptyArray<IDivTabsItem>>;
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
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, tabs won't transmit the scroll gesture to the parent element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
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
     * Ordinal number of the tab that will be opened by default.
     */
    selected_tab?: Type<number | DivExpression>;
    /**
     * Separator color.
     */
    separator_color?: Type<string | DivExpression>;
    /**
     * Indents from the separating line. Not used if `has_separator = false`.
     */
    separator_paddings?: Type<IDivEdgeInsets>;
    /**
     * Switching tabs by scrolling through the contents.
     */
    switch_tabs_by_content_swipe_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Design style of separators between tab titles.
     *
     * Platforms: android
     */
    tab_title_delimiter?: Type<IDivTabsTabTitleDelimiter>;
    /**
     * Design style of tab titles.
     */
    tab_title_style?: Type<IDivTabsTabTitleStyle>;
    /**
     * Indents in the tab name.
     */
    title_paddings?: Type<IDivEdgeInsets>;
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

/**
 * Tab.
 */
export interface IDivTabsItem {
    /**
     * Tab contents.
     */
    div: Type<Div>;
    /**
     * Tab title.
     */
    title: Type<string | DivExpression>;
    /**
     * Action when clicking on the active tab title.
     */
    title_click_action?: Type<IDivAction>;
}

/**
 * Design style of separators between tab titles.
 */
export interface IDivTabsTabTitleDelimiter {
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivFixedSize>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Element width.
     */
    width?: Type<DivFixedSize>;
}

/**
 * Design style of tab titles.
 */
export interface IDivTabsTabTitleStyle {
    /**
     * Background color of the active tab title.
     */
    active_background_color?: Type<string | DivExpression>;
    /**
     * Active tab title style.
     */
    active_font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Color of the active tab title text.
     */
    active_text_color?: Type<string | DivExpression>;
    /**
     * Duration of active title change animation.
     */
    animation_duration?: Type<number | DivExpression>;
    /**
     * Active title change animation.
     *
     * Platforms: android, ios
     */
    animation_type?: Type<TabTitleStyleAnimationType | DivExpression>;
    /**
     * Title corner rounding radius. If the parameter isn't specified, the rounding is maximum (half
     * of the smallest size). Not used if the `corners_radius` parameter is set.
     */
    corner_radius?: Type<number | DivExpression>;
    /**
     * Rounding radii of corners of multiple titles. Empty values are replaced by `corner_radius`.
     */
    corners_radius?: Type<IDivCornersRadius>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Title font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Units of title font size measurement.
     *
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style. Use `active_font_weight` and `inactive_font_weight` instead.
     *
     * @deprecated
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Background color of the inactive tab title.
     */
    inactive_background_color?: Type<string | DivExpression>;
    /**
     * Inactive tab title style.
     */
    inactive_font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Color of the inactive tab title text.
     */
    inactive_text_color?: Type<string | DivExpression>;
    /**
     * Spacing between neighbouring tab titles.
     */
    item_spacing?: Type<number | DivExpression>;
    /**
     * Spacing between title characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Indents around the tab title.
     */
    paddings?: Type<IDivEdgeInsets>;
}

export type TabTitleStyleAnimationType =
    | 'slide'
    | 'fade'
    | 'none';
