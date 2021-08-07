import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Item } from 'src/app/models/item';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBlockComponent implements OnInit {

  @Select(YMCAState.items) 
  cardsItems$: Item[];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
