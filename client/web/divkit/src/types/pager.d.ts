import type { DivBaseData } from './base';
import type { FixedSize, PercentageSize } from './sizes';
import type { Orientation } from './orientation';
import type { BooleanInt } from '../../typings/common';
import type { CollectionItemBuilder } from './itemBuilder';

export interface PageSize {
    type: 'percentage';
    page_width: PercentageSize;
}

export interface NeighbourPageSize {
    type: 'fixed';
    neighbour_page_width: FixedSize;
}

export interface PageContentSize {
    type: 'wrap_content';
}

export type PagerLayoutMode = PageSize | NeighbourPageSize | PageContentSize;

export interface DivPagerData extends DivBaseData {
    type: 'pager';
    layout_mode: PagerLayoutMode;
    item_spacing?: FixedSize;
    items?: DivBaseData[];
    item_builder?: CollectionItemBuilder;
    orientation?: Orientation;
    restrict_parent_scroll?: BooleanInt;
    default_item?: number;
}
