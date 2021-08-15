import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockComponent } from './main-block/main-block.component';
import { CardComponent } from './card/card.component';
import { MoreInfoComponent } from './more-info/more-info.component';



@NgModule({
  declarations: [
    MainBlockComponent,
    CardComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainBlockComponent,
    CardComponent,
    MoreInfoComponent
  ]
})
export class MainModule { }
