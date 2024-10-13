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
    DivFixedSize,
    DivFontWeight,
    DivLineStyle,
    DivSize,
    DivSizeUnit,
    DivTextAlignmentVertical,
    DivTextGradient,
    DivTextRangeBackground,
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
    IDivShadow,
    IDivTextRangeBorder,
    IDivTooltip,
    IDivTransform,
    IDivTrigger,
    IDivVisibilityAction,
} from './';

/**
 * Text.
 */
export class DivText<T extends DivTextProps = DivTextProps> {
    readonly _props?: Exact<DivTextProps, T>;

    readonly type = 'text';
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
     * Automatic text cropping to fit the container size.
     *
     * Platforms: android, web, flutter
     */
    auto_ellipsize?: Type<IntBoolean | DivExpression>;
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
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
     *
     * Platforms: android, ios
     */
    ellipsis?: Type<IDivTextEllipsis>;
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
     * Text color when focusing on the element.
     *
     * Platforms: android, web
     */
    focused_text_color?: Type<string | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
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
     * Platforms: ios, android, web
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
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Images embedded in text.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
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
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
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
     * Maximum number of lines not to be cropped when breaking the limits.
     */
    max_lines?: Type<number | DivExpression>;
    /**
     * Minimum number of cropped lines when breaking the limits.
     *
     * Platforms: android, ios
     */
    min_hidden_lines?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * A character range in which additional style parameters can be set. Defined by mandatory
     * `start` and `end` fields.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
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
     * Ability to select and copy text.
     *
     * Platforms: android, ios, web
     */
    selectable?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text.
     */
    text: Type<string | DivExpression>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color. Not used if the `text_gradient` parameter is set.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Gradient text color.
     *
     * Platforms: android, ios, web
     */
    text_gradient?: Type<DivTextGradient>;
    /**
     * Parameters of the shadow applied to the text.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Set text width to maximal line width, works only with wrap_content width with constrained=true
     * and max_size set
     *
     * Platforms: android, ios
     */
    tighten_width?: Type<IntBoolean | DivExpression>;
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
     * Text cropping method. Use `ellipsis` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    truncate?: Type<DivTextTruncate | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
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

    constructor(props: Exact<DivTextProps, T>) {
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.auto_ellipsize = props.auto_ellipsize;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.ellipsis = props.ellipsis;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.focused_text_color = props.focused_text_color;
        this.font_family = props.font_family;
        this.font_feature_settings = props.font_feature_settings;
        this.font_size = props.font_size;
        this.font_size_unit = props.font_size_unit;
        this.font_weight = props.font_weight;
        this.font_weight_value = props.font_weight_value;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.images = props.images;
        this.layout_provider = props.layout_provider;
        this.letter_spacing = props.letter_spacing;
        this.line_height = props.line_height;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.max_lines = props.max_lines;
        this.min_hidden_lines = props.min_hidden_lines;
        this.paddings = props.paddings;
        this.ranges = props.ranges;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selectable = props.selectable;
        this.selected_actions = props.selected_actions;
        this.strike = props.strike;
        this.text = props.text;
        this.text_alignment_horizontal = props.text_alignment_horizontal;
        this.text_alignment_vertical = props.text_alignment_vertical;
        this.text_color = props.text_color;
        this.text_gradient = props.text_gradient;
        this.text_shadow = props.text_shadow;
        this.tighten_width = props.tighten_width;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.truncate = props.truncate;
        this.underline = props.underline;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

export interface DivTextProps {
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
     * Automatic text cropping to fit the container size.
     *
     * Platforms: android, web, flutter
     */
    auto_ellipsize?: Type<IntBoolean | DivExpression>;
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
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
     *
     * Platforms: android, ios
     */
    ellipsis?: Type<IDivTextEllipsis>;
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
     * Text color when focusing on the element.
     *
     * Platforms: android, web
     */
    focused_text_color?: Type<string | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
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
     * Platforms: ios, android, web
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
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Images embedded in text.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
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
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
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
     * Maximum number of lines not to be cropped when breaking the limits.
     */
    max_lines?: Type<number | DivExpression>;
    /**
     * Minimum number of cropped lines when breaking the limits.
     *
     * Platforms: android, ios
     */
    min_hidden_lines?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * A character range in which additional style parameters can be set. Defined by mandatory
     * `start` and `end` fields.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
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
     * Ability to select and copy text.
     *
     * Platforms: android, ios, web
     */
    selectable?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text.
     */
    text: Type<string | DivExpression>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color. Not used if the `text_gradient` parameter is set.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Gradient text color.
     *
     * Platforms: android, ios, web
     */
    text_gradient?: Type<DivTextGradient>;
    /**
     * Parameters of the shadow applied to the text.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Set text width to maximal line width, works only with wrap_content width with constrained=true
     * and max_size set
     *
     * Platforms: android, ios
     */
    tighten_width?: Type<IntBoolean | DivExpression>;
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
     * Text cropping method. Use `ellipsis` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    truncate?: Type<DivTextTruncate | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
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

export type DivTextTruncate =
    | 'none'
    | 'start'
    | 'end'
    | 'middle';

/**
 * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
 */
export interface IDivTextEllipsis {
    /**
     * Actions when clicking on a crop marker.
     *
     * Platforms: android, ios, web
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Images embedded in a crop marker.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
    /**
     * Character ranges inside a crop marker with different text styles.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
    /**
     * Marker text.
     */
    text: Type<string | DivExpression>;
}

/**
 * Image.
 */
export interface IDivTextImage {
    /**
     * Platforms: android
     */
    accessibility?: Type<IImageAccessibility>;
    /**
     * Vertical image alignment within the row.
     *
     * Platforms: android, web
     */
    alignment_vertical?: Type<DivTextAlignmentVertical | DivExpression>;
    /**
     * Image height.
     */
    height?: Type<DivFixedSize>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * A symbol to insert prior to an image. To insert an image at the end of the text, specify the
     * number of the last character plus one.
     */
    start: Type<number | DivExpression>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     *
     * Platforms: android, web
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Image URL.
     */
    url: Type<string | DivExpression>;
    /**
     * Image width.
     */
    width?: Type<DivFixedSize>;
}

export interface IImageAccessibility {
    /**
     * Element description. It is used as the main description for screen reading applications.
     */
    description?: Type<string | DivExpression>;
    /**
     * Element role. Used to correctly identify an element by the accessibility service. For example,
     * the `list` element is used to group list elements into one element.
     */
    type?: Type<AccessibilityType>;
}

export type AccessibilityType =
    | 'none'
    | 'button'
    | 'image'
    | 'text'
    | 'auto';



/**
 * Additional parameters of the character range.
 */
export interface IDivTextRange {
    /**
     * Action when clicking on text.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Vertical text alignment within the row.
     *
     * Platforms: android, web
     */
    alignment_vertical?: Type<DivTextAlignmentVertical | DivExpression>;
    /**
     * Character range background.
     */
    background?: Type<DivTextRangeBackground>;
    /**
     * Character range border.
     */
    border?: Type<IDivTextRangeBorder>;
    /**
     * Ordinal number of the last character to be included in the range.
     */
    end?: Type<number | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     *
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
     * Spacing between characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Ordinal number of a character which the range begins from. The first character has a number
     * `0`.
     */
    start?: Type<number | DivExpression>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Parameters of the shadow applied to the character range.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Top margin of the character range. Units specified in `font_size_unit`.
     */
    top_offset?: Type<number | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
}
