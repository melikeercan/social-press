export class TwitterResponse {
    constructor(
        public sinceId: number,
        public maxId: number,
        public refreshUrl: string,
        public count: number,
        public completedIn: number,
        public query: string,
        public tweetIds: string[],
        public hasNext: boolean,
        public accessLevel: number
    ) {}
}
