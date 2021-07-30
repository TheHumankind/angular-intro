import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { HeaderBlockComponent } from './header-block/header-block.component';



@NgModule({
  declarations: [
    SearchComponent,
    FilterOptionsComponent,
    HeaderBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    FilterOptionsComponent,
    HeaderBlockComponent
  ]
})
export class HeaderModule { }
