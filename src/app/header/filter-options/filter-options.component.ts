import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SortByDate, SortByKeyWord, SortByViewers } from 'src/app/store/ymca.action';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsComponent implements OnInit {
  sortedBy$: Observable<YMCAState>;

  filter$: Observable<YMCAState>;

  key: string;

  constructor(private store: Store) {
    this.sortedBy$ = this.store.selectSnapshot(state => state.YMCAState.sortedItems);
    this.filter$ = this.store.selectSnapshot(state => state.YMCAState.filterBool);
  }

  @Select((state: { app: any }) => state.app) app$: any;

  ngOnInit(): void {}

  keyChanger(key: string) {
    this.store.dispatch([
      new SortByKeyWord(key)
    ]);
  }

  sortByViews() {
    this.store.dispatch([
      new SortByViewers()
    ]);
  }

  sortByDate() {
    this.store.dispatch([
      new SortByDate()
    ]);
  }
}
