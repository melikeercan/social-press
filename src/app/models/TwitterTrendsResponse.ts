import {RestResponse} from './RestResponse';
import {TwitterHashtagsResponse} from './TwitterHashtagsResponse';

export class TwitterTrendsResponse extends RestResponse{
    public content: TwitterHashtagsResponse;

    constructor(status: string, message: string, timestamp: string, content: TwitterHashtagsResponse) {
        super(status, message, timestamp);
        this.content = content;
    }
}
