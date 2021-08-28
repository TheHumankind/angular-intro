import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppComponentServiceService } from './shared/app-component-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent {
   public constructor(private store: Store, private router: Router) {
    new AppComponentServiceService(store);
    router.navigate(['admin']);
  }
}
