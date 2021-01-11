export interface ContentProps {
    title: string;
    description: string;
    content: string;
    tags: string[];
}

export class Content implements ContentProps{
    content: string;
    description: string;
    tags: string[];
    title: string;

}
