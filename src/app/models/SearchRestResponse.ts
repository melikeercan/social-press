import {RestResponse} from './RestResponse';
import {TwitterResponse} from './TwitterResponse';

export class SearchRestResponse extends RestResponse{

    public content: TwitterResponse;


    constructor(status: string, message: string, timestamp: string, content: TwitterResponse) {
        super(status, message, timestamp);
        this.content = content;
    }
}
