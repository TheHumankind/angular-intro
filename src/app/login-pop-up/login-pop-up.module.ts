import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBlockComponent } from './login-block/login-block.component';
import { LoginPopupFormComponent } from './login-popup-form/login-popup-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginBlockComponent,
    LoginPopupFormComponent
  ],
  exports: [
    LoginBlockComponent,
    LoginPopupFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginPopUpModule { }
