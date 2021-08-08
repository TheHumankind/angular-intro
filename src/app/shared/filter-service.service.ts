import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Face } from '../store/ymca.model';
import { YMCAState } from '../store/ymca.state';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  filter$: Observable<YMCAState>;
  
  constructor(private store : Store) {
    this.filter$ = this.store.selectSnapshot(state => state.YMCAState.filterBool);
  }

  @Select((state: { app: Face; }) => state.app) app$: Face;
}
