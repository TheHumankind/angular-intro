import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  responseUrl: string = '';

  arrOfId: string[];

  constructor(private http: HttpClient) { }

  getHttp(keyWord: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCBQATnyE0MzdT0WKkKNLDcvJXmHRpUd1E&type=video&part=snippet&maxResults=10&q=${keyWord}`);
  }

  getRealData(resp: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCBQATnyE0MzdT0WKkKNLDcvJXmHRpUd1E&id=${resp}&part=snippet,statistics`);
  }
}
