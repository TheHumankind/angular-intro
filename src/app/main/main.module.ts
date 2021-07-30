import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockComponent } from './main-block/main-block.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    MainBlockComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainBlockComponent,
    CardComponent
  ]
})
export class MainModule { }
