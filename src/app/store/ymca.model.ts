import { Item } from "../models/item";
import { AdminCard } from "../models/admin-card";

export interface Face {
    items: Item[],
    sortedItems: Item[],
    selectedItem: Item[],
    adminCards: AdminCard[],
    filterTrigger: boolean,
    sortOrder: boolean,
    loginTrigger: boolean,
}