import {Injectable} from '@angular/core';
import {Sources} from '../models/sources';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {RestResponse} from '../models/RestResponse';
import {TwitterResponse} from '../models/TwitterResponse';
import {PopularHashtagsResponse} from "../models/PopularHashtagsResponse";

const base = 'http://localhost:8080/api/v0/search/twitter/text=';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    data = new Subject<object>();
    loading: boolean;

    constructor(private http: HttpClient) { }

    makeRequest = (searchText: string) => {
        console.log(searchText);
        const url = base + searchText;
        console.log(url);
        this.loading = true;
        this.http.get<RestResponse>(url)
            .subscribe(result => {
                console.log('makeRequest');
                console.log(result);
                if (!result.content.hasOwnProperty('trendList')) {
                    console.log('tweetIds');
                    console.log(result.content.tweetIds);
                    this.data.next(result.content.tweetIds);
                }
                this.loading = false;
            });
    }
}
