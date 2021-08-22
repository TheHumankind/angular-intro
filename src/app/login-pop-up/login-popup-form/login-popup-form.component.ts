import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ChangeLoginTrigger } from 'src/app/store/ymca.action';

@Component({
  selector: 'app-login-popup-form',
  templateUrl: './login-popup-form.component.html',
  styleUrls: ['./login-popup-form.component.less']
})
export class LoginPopupFormComponent {

  constructor(private store: Store, private router: Router) { }

  createToken(event: Event) {
    event.preventDefault();
    const local = window.localStorage;
    local.setItem('token', Math.random().toString(16));
    this.store.dispatch([
      new ChangeLoginTrigger(),
    ])
    this.router.navigate(['main']);
  }
}
