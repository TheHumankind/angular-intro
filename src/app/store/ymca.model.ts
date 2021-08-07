import { Item } from "../models/item";

export interface Face {
    items: Item[],
    filterOption?: boolean,
}