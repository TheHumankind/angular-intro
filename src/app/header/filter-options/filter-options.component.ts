import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
