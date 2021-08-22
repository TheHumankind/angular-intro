import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Face } from '../store/ymca.model';
import { YMCAState } from '../store/ymca.state';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  
  @Select() app$: Face;

  constructor(private store: Store) { }

  getTriggerData(){
    return;
  }
}
