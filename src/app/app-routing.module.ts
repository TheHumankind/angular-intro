import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBlockComponent } from './login-pop-up/login-block/login-block.component';
import { MainBlockComponent } from './main/main-block/main-block.component';
import { BlockComponent } from './page-404/block/block.component';

const routes: Routes = [  
  { path: '', component: LoginBlockComponent },
  { path: 'login', component: LoginBlockComponent },
  { path: 'main', component: MainBlockComponent },
  { path: 'error', component: BlockComponent },
  { path: 'main/:id', component: MainBlockComponent },
  { path: 'main', redirectTo: 'error' },  
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
