import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TwitterTrends} from '../models/TwitterTrends';
import {TwitterTrendsResponse} from '../models/TwitterTrendsResponse';
import {YoutubeTrends} from '../models/YoutubeTrends';
import {YoutubeTrendsResponse} from "../models/YoutubeTrendsResponse";

const baseTwitter = 'http://localhost:8080/api/v0/trends/twitter/';
const baseYoutube = 'http://localhost:8080/api/v0/trends/youtube/';

interface PopularHashtagsResponse {
    trendList: TwitterTrends[];
}

@Injectable({
  providedIn: 'root'
})
export class PopularTrendsService {
  constructor(private http: HttpClient) { }

    fetchTwitterTrends(): Promise<TwitterTrends[] | void> {
      return this.http.get<TwitterTrendsResponse>(baseTwitter).toPromise().then(response => {
          return response.content.trendList;
      });
    }

    fetchYoutubeTrends(): Promise<YoutubeTrends[] | void> {
      return this.http.get<YoutubeTrendsResponse>(baseYoutube).toPromise().then(response => {
        return response.content.trendList;
      });
    }
}
