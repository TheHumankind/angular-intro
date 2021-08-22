import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadItem, SortByViewers, updateFilterTrigger } from 'src/app/store/ymca.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  filter$: Observable<boolean>;

  inputValue: string;

  constructor(private store: Store, private router: Router) {
    this.inputValue = '';
  }

  fakeResponse(event: Event) {
    event.preventDefault();
    this.store.dispatch([
      new SortByViewers()
    ])
  }

  inputEvent(inptValue: string) {
    if(inptValue.length <= 3) {
      return;
    }
    setTimeout(() => {
      const iVal = inptValue;
      if (iVal === this.inputValue) {
        this.router.navigate(['main']);
        this.store.dispatch([
          new LoadItem(iVal)
        ]);
      }
    }, 1000);
  }

  clickHandler(event: Event) {
    event.preventDefault();
    this.store.dispatch([
      new updateFilterTrigger()
    ]);
  }

}
