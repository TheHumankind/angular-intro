import { Injectable } from "@angular/core";
import { Face } from "./ymca.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from 'rxjs/operators';
import { HttpRequestService } from "../shared/http-request.service";
import {LoadItem} from "./ymca.action";
import { Item } from "../models/item";

const ace: Face = {
    items: [],
}

@State<Face> ({
    name: 'YMCAState',
    defaults: ace
})

@Injectable()
export class YMCAState {
    constructor(public httpService: HttpRequestService) { }

    @Action(LoadItem)
    getItem({getState, setState}: StateContext<Face>) {
        return this.httpService.getHttp().pipe(
            tap((res: any) => {
                const state = getState();
                setState({
                    ...state,
                    items: res.items,
                });
            }));
    } 

    @Selector() 
    public static items(state: Face): Item[] {
        return state.items;
    }
}
