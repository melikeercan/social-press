import {TwitterResource} from './TwitterResource';

export class RestResponse {
    constructor(public status: string, public message: string, public timestamp: string, public content: TwitterResource) {}
}
