import {Injectable} from '@angular/core';
import {Sources} from '../models/sources';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {RestResponse} from '../models/RestResponse';
import {TwitterResponse} from '../models/TwitterResponse';

const base = 'http://localhost:8080/api/v0/search/twitter/text=';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    data = new Subject<object>();
    loading: boolean;

    constructor(private http: HttpClient) { }

    makeRequest = (searchText: string, sources: Sources) => {
        console.log(searchText);
        console.log(sources);
        const url = base + searchText;
        console.log(url);
        this.loading = true;
        this.http.get<RestResponse>(url)
            .subscribe(result => {
                console.log(result);
                if (result.content instanceof TwitterResponse) {
                    this.data.next(result.content.tweetIds);
                }
                this.loading = false;
            });
    }
}
