import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private store: Store, private router: Router) {
    this.loginTrigger$ = this.store.select(YMCAState.loginBool);
  }

  accountClick() {
    if (this.store.selectSnapshot(YMCAState.loginBool) === false) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['main'])
      this.store.dispatch([
        new ChangeLoginTrigger(),
      ]);
    }
  }
}
