import { Component, Input, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less']
})
export class SearchResultComponent implements OnInit {
  @Input() response?: SearchResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
