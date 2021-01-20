import {TwitterResponse} from './TwitterResponse';
import {PopularHashtagsResponse} from './PopularHashtagsResponse';

export class RestResponse {
    constructor(
        public status: string,
        public message: string,
        public timestamp: string,
        public content: TwitterResponse | PopularHashtagsResponse
    ) {}
}
