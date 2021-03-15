// takes a number between [0, 1)
// returns integer between [0, length - 1]
// convenient for getting random index
// for an array of length length
function indexFromValue(value, length) {
  length = Math.floor(Number(length)) || 1;
  value = clamp(value, 0, 1);
  return transformValue(value, 0, length - 1);
}

// takes a number between [0, 1)
// returns integer between [min, max]
function transformValue(value, min, max) {
  min = Math.floor(Number(min)) || 0;
  max = Math.ceil(Number(max)) || 1;
  value = clamp(value, 0, 1);
  return Math.floor(value * (max - min + 1)) + min;
}

// clamp a number between [min, max]
function clamp(number, min, max) {
  return Math.min(Math.max(min, Number(number)), max);
}

const usernameparts = require('./words.json');
const seedrandom = require('seedrandom');

class UNG {
  static defaults = {
    rng: seedrandom,
    words: usernameparts,
    formattor: (fn, ln, n) => { return `${fn}${ln}${n}`}
  };
  rng = UNG.defaults.rng;
  usernameParts = UNG.defaults.words;
  UserName = class UserName {
    static formatter = UNG.defaults.formattor;
    constructor(nameParts, seq) {
      this.fullName = nameParts;
      this.sequence = seq;
    }
    toString = function (format = UserName.formatter) {
      return format(this.fullName.firstName, this.fullName.lastName, this.fullName.number);
    }
  }
  generateUsername = (seed) => {
    const rng = this.rng(seed || undefined);
    const adjectiveIndex = indexFromValue(rng(), this.usernameParts.adjectives.length);
    const nounIndex = indexFromValue(rng(), this.usernameParts.nouns.length);
    const numOfDigits = transformValue(rng(), 0, 4);
    const firstName = this.usernameParts.adjectives.list[adjectiveIndex];
    const lastName = this.usernameParts.nouns.list[nounIndex];
    let number = "";
    for (let i = 0; i <= numOfDigits; i++) {
      const digit = transformValue(rng(), 0, 9);
      number += digit.toString();
    }
    return new this.UserName({
      firstName,
      lastName,
      number
    }, rng);
  }


}




module.exports = UNG;
