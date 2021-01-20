import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trends} from '../models/Trends';
import {HashtagRestResponse} from '../models/HashtagRestResponse';

const base = 'http://localhost:8080/api/v0/trends/twitter/';

interface PopularHashtagsResponse {
    trendList: Trends[];
}

@Injectable({
  providedIn: 'root'
})
export class PopularTrendsService {
  constructor(private http: HttpClient) { }

    fetchPopularTrends(): Promise<Trends[] | void> {
      return this.http.get<HashtagRestResponse>(base).toPromise().then(response => {
          return response.content.trendList;
      });
    }
}
