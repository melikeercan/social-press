import {RestResponse} from './RestResponse';

export class SearchYoutubeRelatedVideosRestResponse extends RestResponse {
    // TODO fix type
    public content: any;

    constructor(status: string, message: string, timestamp: string, content: any) {
        super(status, message, timestamp);
        this.content = content;
    }
}
