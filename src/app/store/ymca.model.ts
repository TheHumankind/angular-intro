import { Item } from "../models/item";

export interface Face {
    items: Item[],
    sortedItems: Item[],
    selectedItem: Item[],
    filterTrigger: boolean,
    sortOrder: boolean,
}