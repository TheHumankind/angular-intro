import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { HeaderBlockComponent } from './header-block/header-block.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    FilterOptionsComponent,
    HeaderBlockComponent,
    SearchResultComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchComponent,
    FilterOptionsComponent,
    HeaderBlockComponent
  ]
})
export class HeaderModule { }
