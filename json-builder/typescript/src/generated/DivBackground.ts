// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivImageBackground,
    DivLinearGradient,
    DivNinePatchBackground,
    DivRadialGradient,
    DivSolidBackground,
} from './';

export type DivBackground =
    | DivLinearGradient
    | DivRadialGradient
    | DivImageBackground
    | DivSolidBackground
    | DivNinePatchBackground;
