import {Injectable} from '@angular/core';
import {Sources} from '../models/sources';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {RestResponse} from '../models/RestResponse';

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
        const url = 'http://localhost:8080/api/v0/search/twitter/text=' + searchText;
        const tur = 'https://publish.twitter.com/oembed?url=https://twitter.com/Interior/status/463440424141459456';
        console.log(url);
        console.log(tur);
        this.loading = true;
        this.http.get<RestResponse>(url)
            .subscribe(result => {
                console.log(result);
                this.data.next(result.content.tweetIds);
                this.loading = false;
            });
    }
}
