import usernameData from "./words";
import seedrandom from "seedrandom";

function clamp(value:number, min:number, max:number):number {
    return Math.min(Math.max(min, Number(value)), max);;
}

function map(value:number, fromMin:number, fromMax:number, toMin:number, toMax:number, clamping:boolean=false):number {
    if (clamping) value = clamp(value, fromMin, fromMax);
    return (value-fromMin) * (toMax-toMin) / (fromMax-fromMin) + toMin;
}

function UNG() {
    this.rng = seedrandom;
    this.words = usernameData;
    this.formattor = (...args) => {
        return args.join('');
    };
    this.generateUsername = () => {
        return new Username(this, ['hello', 'world', '123'], 123);
    };
}

class Username {
    parent: any;
    fullName: [string, string, string];
    sequence: any;
    constructor(p, fn, seq) {
        this.parent = p;
        this.fullName = fn;
        this.sequence = seq;
    };
    toString = (format = this.parent.formattor) => {
        return format(...this.fullName);
    };
}

let ung = new UNG();
console.log(ung.generateUsername().toString())