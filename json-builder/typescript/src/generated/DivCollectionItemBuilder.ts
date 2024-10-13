// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

import {
    Div,
} from './';

export interface IDivCollectionItemBuilder {
    /**
     * Data that will be used to create collection elements.
     */
    data: Type<unknown[] | DivExpression>;
    /**
     * Name for accessing the next `data` element in the prototype. Working with this element is the
     * same as with dictionaries.
     */
    data_element_name?: Type<string>;
    /**
     * Array of `div` elements from which the collection elements will be created.
     */
    prototypes: Type<NonEmptyArray<IDivCollectionItemBuilderPrototype>>;
}

export interface IDivCollectionItemBuilderPrototype {
    /**
     * `Div` from which the collection elements will be created. In `Div`, you can use expressions
     * using data from `data`. To access the next `data` element, you need to use the same prefix as
     * in `data_element_prefix`.
     */
    div: Type<Div>;
    /**
     * `id` of the element to be created from the prototype. Unlike the `div-base.id` field, may
     * contain expressions. Has a higher priority than `div-base.id`.
     */
    id?: Type<string | DivExpression>;
    /**
     * A condition that is used to select the prototype for the next element in the collection. If
     * there is more than 1 true condition, the earlier prototype is selected. If none of the
     * conditions are met, the element from `data` is skipped.
     */
    selector?: Type<IntBoolean | DivExpression>;
}
