import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Sources} from '../models/sources';
import {RestResponse} from '../models/RestResponse';
import {PopularHashtagsResponse, Trends} from '../models/PopularHashtagsResponse';

const base = 'http://localhost:8080/api/v0/popular';

@Injectable({
  providedIn: 'root'
})
export class PopularTrendsService {

  popularHashtags = new Subject<object>();

  constructor(private http: HttpClient) { }

  makeRequest = (sources: Sources) => {
    console.log(sources);
    this.http.get<RestResponse>(base)
        .subscribe(result => {
          console.log(result);
          if (result.content instanceof PopularHashtagsResponse) {
            this.popularHashtags.next(result.content.trends);
          }

        });
  }
}
