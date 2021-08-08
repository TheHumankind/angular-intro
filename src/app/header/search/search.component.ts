import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { updateFilterTrigger } from 'src/app/store/ymca.action';
import { Face } from 'src/app/store/ymca.model';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  constructor(private store: Store) {}

  @Select((state: { app: Face; }) => state.app) app$: Face;

  ngOnInit(): void {
  }

  tryToClick(e: Event) {
    e.preventDefault();
    return this.store.selectSnapshot(YMCAState.filterBool);
  }

  clickHandler(event: Event) {
    event.preventDefault();
    this.store.dispatch([
      new updateFilterTrigger()
    ]);
  }

}
