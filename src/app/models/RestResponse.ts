import {TwitterResponse} from './TwitterResponse';

export class RestResponse {
    constructor(public status: string, public message: string, public timestamp: string, public content: TwitterResponse) {}
}
