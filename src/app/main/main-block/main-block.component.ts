import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBlockComponent {
  
  selected$: Observable<Item[]>;

  constructor(private store: Store) {
    this.selected$ = combineLatest([this.store.select(YMCAState.selectItem)]).pipe(
      map(([items]) => [...items])
    )
  }
}
