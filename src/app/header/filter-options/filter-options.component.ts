import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SortByDate, SortByKeyWord, SortByViewers } from 'src/app/store/ymca.action';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsComponent {

  f$: Observable<boolean>;

  key: string;

  constructor(private store: Store) { 
    this.f$ = this.store.select(YMCAState.filterBool);
  }

  returnF() {
    return this.f$;
  }

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
