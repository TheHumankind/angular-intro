import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBlockComponent implements OnInit {
  boolTriger$: Observable<YMCAState>;

  constructor(private store: Store) {
    this.boolTriger$ = this.store.selectSnapshot(state => state.YMCAState.filterBool);
  }

  @Select((state: { app: any; }) => state.app) app$: any;

  ngOnInit(): void {
  }
}
