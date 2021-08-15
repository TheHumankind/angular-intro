import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-popup-form',
  templateUrl: './login-popup-form.component.html',
  styleUrls: ['./login-popup-form.component.less']
})
export class LoginPopupFormComponent {

  constructor() { }

  createToken(event: Event) {
    event.preventDefault();
    const local = window.localStorage;
    local.setItem('token', Math.random().toString(16));
    window.location.pathname = 'main';
  }
}
