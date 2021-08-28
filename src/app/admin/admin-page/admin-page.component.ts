import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AdminCard } from 'src/app/models/admin-card';
import { UpdateAdminCards } from 'src/app/store/ymca.action';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less'],
})
export class AdminPageComponent {

  videoTitle: string;

  descr: string;

  imgLink: string;

  videoLink: string;

  constructor(private store: Store) { }

  toTheStore() {
    if (!this.videoTitle || !this.descr || !this.imgLink || !this.videoLink) {
      alert('You have empty field(s)');
      return;
    }
    const data = new Date();
    const newCard: AdminCard = {
      title: this.videoTitle,
      descr: this.descr,
      imgLink: this.imgLink,
      vidLink: this.videoLink,
      date: data.toString(),
    }
    this.store.dispatch([
      new UpdateAdminCards(newCard),
    ])
  }
}
