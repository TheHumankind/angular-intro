import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
