import { Injectable } from "@angular/core";
import { Face } from "./ymca.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from 'rxjs/operators';
import { HttpRequestService } from "../shared/http-request.service";
import {LoadItem, SortByDate, SortByKeyWord, SortByViewers, updateFilterTrigger} from "./ymca.action";
import { Item } from "../models/item";

function sortMeByViewsTrue(a:Item, b:Item) {
    const nameA = +a.statistics.viewCount;
    const nameB = +b.statistics.viewCount;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = -1;
    }
    if (nameA > nameB) {
        returnedValue = 1;
    }
    return returnedValue;
}

function sortMeByViewsFalse(a:Item, b:Item) {
    const nameA = +a.statistics.viewCount;
    const nameB = +b.statistics.viewCount;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = 1;
    }
    if (nameA > nameB) {
        returnedValue = -1;
    }
    return returnedValue;
}

function sortMeByDateTrue(a:Item, b:Item) {
    const aDate = +new Date(a.snippet.publishedAt);
    const bDate = +new Date(b.snippet.publishedAt);
    return aDate - bDate;
}

function sortMeByDateFalse(a:Item, b:Item) {
    const aDate = +new Date(a.snippet.publishedAt);
    const bDate = +new Date(b.snippet.publishedAt);
    return bDate - aDate;
}

@State<Face> ({
    name: 'YMCAState',
    defaults: {
        items: [],
        sortedItems: [],
        filterTrigger: true,
        sortOrder: false,
    }
})

@Injectable()
export class YMCAState {
    constructor(public httpService: HttpRequestService) { }

    @Action(LoadItem)
    getItem({getState, patchState}: StateContext<Face>) {
        return this.httpService.getHttp().pipe(
            tap((res: any) => {
                const state = getState();
                patchState({
                    ...state,
                    items: res.items,
                });
            }));
    } 

    @Action(updateFilterTrigger)
    trigger({patchState, getState}: StateContext<Face>) {
        const currentState = getState().filterTrigger;
        patchState({filterTrigger: !currentState});
    }

    @Action(SortByKeyWord)
    sortByKeyWord({patchState, getState}: StateContext<Face>, { keyWord }: SortByKeyWord) {
        const currentState = getState().items;
        const arrOfItem: Item[] = [];
        currentState.forEach((e) => {
            if(e.snippet.title.toLowerCase().includes(keyWord.toLowerCase())) {
                arrOfItem.push(e);
            }
        });
        patchState({sortedItems: arrOfItem});
    }

    @Action(SortByViewers)
    sortByViewers({patchState, getState}: StateContext<Face>) {
        patchState({ sortOrder: !getState().sortOrder});
        const currentState = [...getState().items];
        if (getState().sortOrder) {
            currentState.sort((a, b) => sortMeByViewsTrue(a, b));
            patchState({sortedItems: currentState});
        } else {
            currentState.sort((a, b) => sortMeByViewsFalse(a, b));
            patchState({sortedItems: currentState});
        }
    }

    @Action(SortByDate)
    sortByDate({patchState, getState}: StateContext<Face>) {
        patchState({ sortOrder: !getState().sortOrder});
        const currentState = [...getState().items];
        if (getState().sortOrder) {
            currentState.sort((a, b) => sortMeByDateTrue(a, b));
            patchState({sortedItems: currentState});
        } else {
            currentState.sort((a, b) => sortMeByDateFalse(a, b));
            patchState({sortedItems: currentState});
        }
    }

    @Selector() 
    public static items(state: Face): Item[] {
        return state.items;
    }

    @Selector() 
    public static filterBool(state: Face): boolean {
        if (!state.filterTrigger) {
            state.filterTrigger = true;
        }
        return state.filterTrigger;
    }

    @Selector() 
    public static sortedItems(state: Face): Item[] {
        return state.sortedItems;
    }
}
