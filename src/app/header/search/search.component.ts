import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SortByDate, updateFilterTrigger } from 'src/app/store/ymca.action';
import { Face } from 'src/app/store/ymca.model';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  filter$: Observable<boolean>;

  constructor(private store: Store) {
  }


  ngOnInit(): void {
  }

  fakeResponse(event: Event) {
    event.preventDefault();
    this.store.dispatch([
      new SortByDate()
    ]);
  }

  clickHandler(event: Event) {
    event.preventDefault();
    this.store.dispatch([
      new updateFilterTrigger()
    ]);
  }

}
