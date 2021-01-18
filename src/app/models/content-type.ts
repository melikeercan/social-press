export class ContentType {

    private static AllValues: { [name: string]: ContentType } = {};

    static readonly Instagram = new ContentType(0, 'Instagram');
    static readonly Twitter = new ContentType(1, 'Twitter');
    static readonly Youtube = new ContentType(2, 'Youtube');

    private constructor(public readonly id: number, public readonly displayValue: string) {
        ContentType.AllValues[displayValue] = this;
    }

    public static parseEnum(data: string): ContentType{
        return ContentType.AllValues[data];
    }

}
