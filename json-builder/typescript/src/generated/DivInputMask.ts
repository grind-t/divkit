// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    DivCurrencyInputMask,
    DivFixedLengthInputMask,
    DivPhoneInputMask,
} from './';

export type DivInputMask =
    | DivFixedLengthInputMask
    | DivCurrencyInputMask
    | DivPhoneInputMask;
