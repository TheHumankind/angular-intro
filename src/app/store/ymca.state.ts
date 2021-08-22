import { Injectable } from "@angular/core";
import { Face } from "./ymca.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HttpRequestService } from "../shared/http-request.service";
import {LoadItem, SortByDate, SortByKeyWord, SortByViewers, updateFilterTrigger, SelectItem, ClearSelectedItem, ChangeLoginTrigger} from "./ymca.action";
import { Item } from "../models/item";
import { FilterService } from "../shared/filter-service.service";

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
        selectedItem: [],
        filterTrigger: true,
        sortOrder: false,
        loginTrigger: false,
    }
})

@Injectable()
export class YMCAState {
    constructor(public httpService: HttpRequestService, public filterService: FilterService) { }

    @Action(LoadItem)
    getItem({ patchState }: StateContext<Face>, { keyWord }: SortByKeyWord) {
        this.httpService.getHttp(keyWord)
            .subscribe((data: any) => {
                const videoId: string[] = [];
                const currentItems = JSON.parse(JSON.stringify(data.items));
                currentItems.forEach((e: { id: { videoId: string; }; }) => {
                    videoId.push(e.id.videoId);
                });
                this.httpService.getRealData(videoId.join(','))
                    .subscribe((realVidData: any) => {
                        patchState({
                            items: realVidData.items,
                            sortedItems: realVidData.items
                        });
                    });
            });
    }

    @Action(updateFilterTrigger)
    trigger({patchState, getState}: StateContext<Face>) {
        const currentState = getState().filterTrigger;
        patchState({filterTrigger: !currentState});
        return !currentState;
    }

    @Action(ChangeLoginTrigger)
    changeLoginTrigger({patchState, getState}: StateContext<Face>) {
        const currentState = getState().loginTrigger;
        patchState({loginTrigger: !currentState});
        return !currentState;
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

    @Action(SelectItem)
    selectItem({ patchState, getState }: StateContext<Face>, { id }: SelectItem) {
        const currentState = getState().items;
        currentState.forEach((e) => {
            if (e.id === id) {
                patchState({
                    selectedItem: [e],
                });
            }
        });
    } 

    @Action(ClearSelectedItem)
    clearSelectedItem({ patchState, getState }: StateContext<Face>) {
        patchState({
            selectedItem: [],
        })
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
        return state.filterTrigger;
    }

    @Selector() 
    public static loginBool(state: Face): boolean {
        return state.loginTrigger;
    }

    @Selector() 
    public static sortedItems(state: Face): Item[] {
        return state.sortedItems;
    }

    @Selector() 
    public static selectItem(state: Face) {
        return state.selectedItem;
    }
}
