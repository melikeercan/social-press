import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {SearchTwitterHashtagsRestResponse} from '../models/SearchTwitterHashtagsRestResponse';

const baseTwitter = 'http://localhost:8080/api/v0/search/twitter/text=';
const baseYoutube = 'http://localhost:8080/api/v0/search/twitter/videoId=';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    data = new Subject<object>();
    loading: boolean;

    constructor(private http: HttpClient) { }

    searchTwitterHashtags = (searchText: string) => {
        const url = baseTwitter + searchText;
        this.loading = true;
        this.http.get<SearchTwitterHashtagsRestResponse>(url)
            .subscribe(result => {
                this.data.next(result.content.tweetIds);
                this.loading = false;
            });
    }

    searchRelatedYoutubeVideos = (id: string) => {
        const url = baseYoutube + id;
        this.loading = true;

    }
}
