import {RestResponse} from './RestResponse';
import {PopularHashtagsResponse} from './PopularHashtagsResponse';

export class HashtagRestResponse extends RestResponse{
    public content: PopularHashtagsResponse;

    constructor(status: string, message: string, timestamp: string, content: PopularHashtagsResponse) {
        super(status, message, timestamp);
        this.content = content;
    }
}
