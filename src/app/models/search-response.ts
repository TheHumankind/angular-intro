import { Item } from "./item";

export interface SearchResponse {
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: Item[]
}
