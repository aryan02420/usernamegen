interface IWordlist {
    list: string[];
    length: number;
}
interface IWords {
    nouns: IWordlist;
    adjectives: IWordlist;
}
declare let words: IWords;
export { words, IWords, IWordlist };
