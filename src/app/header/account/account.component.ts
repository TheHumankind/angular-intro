import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeLoginTrigger } from 'src/app/store/ymca.action';
import { YMCAState } from 'src/app/store/ymca.state';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent {
  loginTrigger$: Observable<boolean>;

  constructor(private store: Store) {
    this.loginTrigger$ = this.store.select(YMCAState.loginBool);
  }

  accountClick() {
    if (this.store.selectSnapshot(YMCAState.loginBool) === false) {
      window.location.pathname = 'login'
    } else {
      this.store.dispatch([
        new ChangeLoginTrigger(),
      ]);
    }
  }
}
