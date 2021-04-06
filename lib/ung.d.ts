import { IWords } from "./words";
declare class Username {
    parent: UNG;
    fullName: string[];
    sequence: any;
    constructor(p: UNG, fn: string[], seq: any);
    toString: (format?: (...args: string[]) => string) => string;
}
declare class UNG {
    constructor();
    rng: any;
    words: IWords;
    formattor: (...args: string[]) => string;
    generateUsername: (seed?: any) => Username;
}
export { UNG, Username };
