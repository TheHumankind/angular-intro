import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { ClearSelectedItem } from 'src/app/store/ymca.action';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.less']
})
export class MoreInfoComponent {

  selected$: Observable<Item[]>;

  constructor(private store: Store) {
    this.selected$ = combineLatest([this.store.select(YMCAState.selectItem)]).pipe(
      map(([items]) => [...items])
    )
  }

  clearSelected() {
    this.store.dispatch([
      new ClearSelectedItem()
    ])
  }
}
