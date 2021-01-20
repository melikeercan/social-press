import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {SearchRestResponse} from '../models/SearchRestResponse';

const base = 'http://localhost:8080/api/v0/search/twitter/text=';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    data = new Subject<object>();
    loading: boolean;

    constructor(private http: HttpClient) { }

    makeRequest = (searchText: string) => {
        const url = base + searchText;
        this.loading = true;
        this.http.get<SearchRestResponse>(url)
            .subscribe(result => {
                this.data.next(result.content.tweetIds);
                this.loading = false;
            });
    }
}
