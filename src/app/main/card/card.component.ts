import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { SelectItem } from 'src/app/store/ymca.action';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {  

  cardsItems$: Observable<Item[]>;

  constructor(private store: Store, private router: Router) {
    this.cardsItems$ = this.store.select(YMCAState.sortedItems);
  }

  selectItem(id: string) {
    const link = `main/${id}`;
    this.router.navigate([link]);
    this.store.dispatch([
      new SelectItem(id)
    ]);
  }

  theBorderIs(item: Item) {
    const data = new Date(item.snippet.publishedAt);
    const currentDate = new Date();
    let borderColor = '';
    if (currentDate.getFullYear() - data.getFullYear() >= 1) {
      borderColor = '#e77b7b';
    } else if (currentDate.getFullYear() === data.getFullYear() && currentDate.getMonth() > data.getMonth()) {
      borderColor = '#ffff75';
    } else {
      borderColor = '#81e278';
    }
    return borderColor;
  }
}
