"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Username = exports.UNG = void 0;
const words_1 = require("./words");
const seedrandom = require("seedrandom");
function clamp(value, min, max) {
    return Math.min(Math.max(min, Number(value)), max);
    ;
}
;
function map(value, fromMin, fromMax, toMin, toMax, clamping = false) {
    if (clamping)
        value = clamp(value, fromMin, fromMax);
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}
;
class Username {
    constructor(p, fn, seq) {
        this.toString = (format = this.parent.formattor) => {
            return format(...this.fullName);
        };
        this.parent = p;
        this.fullName = fn;
        this.sequence = seq;
    }
    ;
}
exports.Username = Username;
;
class UNG {
    constructor() {
        this.rng = seedrandom;
        this.words = words_1.words;
        this.formattor = (...args) => {
            return args.join('');
        };
        this.generateUsername = (seed = undefined) => {
            const rng = this.rng(seed);
            const adjectiveIndex = Math.floor(map(rng(), 0, 1, 0, this.words.adjectives.length, true));
            const nounIndex = Math.floor(map(rng(), 0, 1, 0, this.words.nouns.length, true));
            const numDigits = Math.floor(map(rng(), 0, 1, 1, 6));
            const firstName = this.words.adjectives.list[adjectiveIndex];
            const lastName = this.words.nouns.list[nounIndex];
            let num = "";
            for (let i = 0; i < numDigits; i++) {
                const digit = Math.floor(map(rng(), 0, 1, 0, 10));
                num += digit.toString();
            }
            return new Username(this, [firstName, lastName, num], rng);
        };
    }
    ;
}
exports.UNG = UNG;
