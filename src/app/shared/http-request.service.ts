import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  responseUrl: string = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/angular/response.json';

  constructor(private http: HttpClient) { }

  getHttp() {
    return this.http.get(this.responseUrl);
  }
}
