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
    DivFontWeight,
    DivInputFilter,
    DivInputMask,
    DivInputValidator,
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
    IDivTooltip,
    IDivTransform,
    IDivTrigger,
    IDivVisibilityAction,
} from './';

/**
 * Text input element.
 */
export class DivInput<T extends DivInputProps = DivInputProps> {
    readonly _props?: Exact<DivInputProps, T>;

    readonly type = 'input';
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
     * Text auto-capitalization type.
     *
     * Platforms: android, ios, web
     */
    autocapitalization?: Type<DivInputAutocapitalization | DivExpression>;
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
     * Filter that prevents users from entering text that doesn't satisfy the specified conditions.
     *
     * Platforms: ios
     */
    filters?: Type<NonEmptyArray<DivInputFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
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
     * Text highlight color. If the value isn't set, the color set in the client will be used
     * instead.
     *
     * Platforms: android, ios, web
     */
    highlight_color?: Type<string | DivExpression>;
    /**
     * Text color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Tooltip text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables text editing.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Keyboard type.
     */
    keyboard_type?: Type<DivInputKeyboardType | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Mask for entering text based on the specified template.
     *
     * Platforms: android, ios, web
     */
    mask?: Type<DivInputMask>;
    /**
     * Maximum number of characters that can be entered in the input field.
     *
     * Platforms: android, ios, web
     */
    max_length?: Type<number | DivExpression>;
    /**
     * Maximum number of lines to be displayed in the input field.
     */
    max_visible_lines?: Type<number | DivExpression>;
    /**
     * Text input line used in the native interface.
     *
     * Platforms: android
     */
    native_interface?: Type<IDivInputNativeInterface>;
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
     * Highlighting input text when focused.
     *
     * Platforms: android, ios, web
     */
    select_all_on_focus?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Name of text storage variable.
     */
    text_variable: Type<string>;
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
     * Validator that checks that the field value meets the specified conditions.
     *
     * Platforms: android, ios
     */
    validators?: Type<NonEmptyArray<DivInputValidator>>;
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

    constructor(props: Exact<DivInputProps, T>) {
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.autocapitalization = props.autocapitalization;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.filters = props.filters;
        this.focus = props.focus;
        this.font_family = props.font_family;
        this.font_size = props.font_size;
        this.font_size_unit = props.font_size_unit;
        this.font_weight = props.font_weight;
        this.font_weight_value = props.font_weight_value;
        this.functions = props.functions;
        this.height = props.height;
        this.highlight_color = props.highlight_color;
        this.hint_color = props.hint_color;
        this.hint_text = props.hint_text;
        this.id = props.id;
        this.is_enabled = props.is_enabled;
        this.keyboard_type = props.keyboard_type;
        this.layout_provider = props.layout_provider;
        this.letter_spacing = props.letter_spacing;
        this.line_height = props.line_height;
        this.margins = props.margins;
        this.mask = props.mask;
        this.max_length = props.max_length;
        this.max_visible_lines = props.max_visible_lines;
        this.native_interface = props.native_interface;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.select_all_on_focus = props.select_all_on_focus;
        this.selected_actions = props.selected_actions;
        this.text_alignment_horizontal = props.text_alignment_horizontal;
        this.text_alignment_vertical = props.text_alignment_vertical;
        this.text_color = props.text_color;
        this.text_variable = props.text_variable;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.validators = props.validators;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

export interface DivInputProps {
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
     * Text auto-capitalization type.
     *
     * Platforms: android, ios, web
     */
    autocapitalization?: Type<DivInputAutocapitalization | DivExpression>;
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
     * Filter that prevents users from entering text that doesn't satisfy the specified conditions.
     *
     * Platforms: ios
     */
    filters?: Type<NonEmptyArray<DivInputFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
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
     * Text highlight color. If the value isn't set, the color set in the client will be used
     * instead.
     *
     * Platforms: android, ios, web
     */
    highlight_color?: Type<string | DivExpression>;
    /**
     * Text color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Tooltip text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables text editing.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Keyboard type.
     */
    keyboard_type?: Type<DivInputKeyboardType | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Mask for entering text based on the specified template.
     *
     * Platforms: android, ios, web
     */
    mask?: Type<DivInputMask>;
    /**
     * Maximum number of characters that can be entered in the input field.
     *
     * Platforms: android, ios, web
     */
    max_length?: Type<number | DivExpression>;
    /**
     * Maximum number of lines to be displayed in the input field.
     */
    max_visible_lines?: Type<number | DivExpression>;
    /**
     * Text input line used in the native interface.
     *
     * Platforms: android
     */
    native_interface?: Type<IDivInputNativeInterface>;
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
     * Highlighting input text when focused.
     *
     * Platforms: android, ios, web
     */
    select_all_on_focus?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Name of text storage variable.
     */
    text_variable: Type<string>;
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
     * Validator that checks that the field value meets the specified conditions.
     *
     * Platforms: android, ios
     */
    validators?: Type<NonEmptyArray<DivInputValidator>>;
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

export type DivInputAutocapitalization =
    | 'auto'
    | 'none'
    | 'words'
    | 'sentences'
    | 'all_characters';

export type DivInputKeyboardType =
    | 'single_line_text'
    | 'multi_line_text'
    | 'phone'
    | 'number'
    | 'email'
    | 'uri'
    | 'password';

/**
 * Text input line used in the native interface.
 */
export interface IDivInputNativeInterface {
    /**
     * Text input line color.
     */
    color: Type<string | DivExpression>;
}
