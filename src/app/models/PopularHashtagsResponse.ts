export class Trends {
    constructor(
        public name: string,
        public url: string,
        public query: string,
    ) {}
}

export class PopularHashtagsResponse {
    constructor(public trends: Trends[]) {}
}
