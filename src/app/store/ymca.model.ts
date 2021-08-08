import { Item } from "../models/item";

export interface Face {
    items: Item[],
    sortedItems: Item[],
    filterTrigger?: boolean,
    sortOrder: boolean,
}