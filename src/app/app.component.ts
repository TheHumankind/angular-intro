import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppComponentServiceService } from './shared/app-component-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent {
   public constructor(private store : Store) {
    new AppComponentServiceService(store);
  }
}
