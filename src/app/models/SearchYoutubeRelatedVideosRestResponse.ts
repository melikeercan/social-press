import {RestResponse} from './RestResponse';
import {YoutubeResultsResponse} from './YoutubeResultsResponse';

export class SearchYoutubeRelatedVideosRestResponse extends RestResponse {
    public content: YoutubeResultsResponse;

    constructor(status: string, message: string, timestamp: string, content: YoutubeResultsResponse) {
        super(status, message, timestamp);
        this.content = content;
    }
}
