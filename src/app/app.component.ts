import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadItem } from './store/ymca.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit{
  public constructor(private store : Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadItem);
  }
}
