import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {  

  cardsItems$: Observable<Item[]>;

  constructor(private store: Store) {
    this.cardsItems$ = combineLatest([this.store.select(YMCAState.sortedItems)]).pipe(
      map(([items]) => [...items])
      )
  }

  ngOnInit(): void {
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
