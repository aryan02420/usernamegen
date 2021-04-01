import usernameData from "./words";
import * as seedrandom from "seedrandom";


function clamp(value:number, min:number, max:number):number {
    return Math.min(Math.max(min, Number(value)), max);;
};
function map(value:number, fromMin:number, fromMax:number, toMin:number, toMax:number, clamping:boolean=false):number {
    if (clamping) value = clamp(value, fromMin, fromMax);
    return (value-fromMin) * (toMax-toMin) / (fromMax-fromMin) + toMin;
};


class Username {
    parent: UNG;
    fullName: string[];
    sequence: any;
    constructor(p: UNG, fn: string[], seq: any) {
        this.parent = p;
        this.fullName = fn;
        this.sequence = seq;
    };
    toString = (format = this.parent.formattor): string => {
        return format(...this.fullName);
    };
};

class UNG {
    constructor(){};
    rng: any = seedrandom;
    words = usernameData;
    formattor = (...args:string[]): string => {
        return args.join('');
    };
    generateUsername = (seed: any = undefined): Username => {
        const rng: any = this.rng(seed);
        const adjectiveIndex: number = Math.floor(map(rng(),0,1,0,this.words.adjectives.length,true));
        const nounIndex: number = Math.floor(map(rng(),0,1,0,this.words.nouns.length,true));
        const numDigits: number =  Math.floor(map(rng(),0,1,1,6));
        const firstName: string = this.words.adjectives.list[adjectiveIndex];
        const lastName: string = this.words.nouns.list[nounIndex];
        let num: string = "";
        for (let i = 0; i < numDigits; i++) {
            const digit = Math.floor(map(rng(),0,1,0,10));
            num += digit.toString();
        }        
        return new Username(this, [firstName, lastName, num], rng);
    };
}


let ung = new UNG()
console.log(ung.generateUsername().toString());

export default UNG;