import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {SearchTwitterHashtagsRestResponse} from '../models/SearchTwitterHashtagsRestResponse';
import {SearchYoutubeRelatedVideosRestResponse} from '../models/SearchYoutubeRelatedVideosRestResponse';

const baseTwitter = 'http://localhost:8080/api/v0/search/twitter/text=';
const baseYoutube = 'http://localhost:8080/api/v0/search/youtube/videoId=';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    twitterData = new Subject<object>();
    youtubeData = new Subject<object>();
    selectedId = new Subject<string>();
    loading: boolean;

    constructor(private http: HttpClient) { }

    searchTwitterHashtags = (searchText: string) => {
        const url = baseTwitter + searchText;
        this.loading = true;
        this.http.get<SearchTwitterHashtagsRestResponse>(url)
            .subscribe(result => {
                this.twitterData.next(result.content.tweetIds);
                this.loading = false;
            });
    }

    searchRelatedYoutubeVideos = (id: string) => {
        const url = baseYoutube + id;
        this.loading = true;
        this.selectedId.next(id);
        this.http.get<SearchYoutubeRelatedVideosRestResponse>(url)
            .subscribe(result => {
                console.log(result);
                // this.youtubeData.next(result.content.youtubeResults);
                // this.loading = false;
            });
    }
}
