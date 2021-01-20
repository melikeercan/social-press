import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestResponse} from '../models/RestResponse';
import {Trends} from '../models/Trends';
import {TwitterResponse} from '../models/TwitterResponse';

const base = 'http://localhost:8080/api/v0/trends/twitter/';

interface PopularHashtagsResponse {
    trendList: Trends[];
}

@Injectable({
  providedIn: 'root'
})
export class PopularTrendsService {

  popularHashtags = new Subject<PopularHashtagsResponse>();

  constructor(private http: HttpClient) { }

    fetchPopularTrends(): Promise<Trends[] | void> {
      return this.http.get<RestResponse>(base).toPromise().then(response => {
          console.log('fetchPopularTrends');
          console.log(response);
          console.log(response.content);
          return !(response.content instanceof TwitterResponse) ? response.content.trendList : [];
      });
    }
}
