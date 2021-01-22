import {RestResponse} from './RestResponse';
import {YoutubePopularVideosResponse} from './YoutubePopularVideosResponse';

export class YoutubeTrendsResponse extends RestResponse{
    public content: YoutubePopularVideosResponse;

    constructor(status: string, message: string, timestamp: string, content: YoutubePopularVideosResponse) {
        super(status, message, timestamp);
        this.content = content;
    }
}
