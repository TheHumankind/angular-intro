import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadItem } from '../store/ymca.action';

@Injectable({
  providedIn: 'root'
})
export class AppComponentServiceService {

  constructor(private store : Store) {}
}
