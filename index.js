const seedrandom = require('seedrandom');
const usernameParts = require('./words.js');


class UserName {
  static formatter = (fn, ln, n) => `${fn}${ln}${n}`;
  nameParts;
  sequence;
  constructor(nameParts, seq) {
    this.name = nameParts;
    this.sequence = seq;
  }
  toString(format = UserName.formatter) {
    return format(this.name.firstName, this.name.lastName, this.name.number);
  }
}
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
  min = Math.ceil(Number(min)) || 0;
  max = Math.floor(Number(max)) || 1;
  value = clamp(value, 0, 1);
  return Math.floor(value * (max - min + 1)) + min;
}

// clamp a number between [min, max]
function clamp(number, min, max) {
  return Math.min(Math.max(min, Number(number)), max);
}


let generateUsername = (seed) => {
  const rng = seedrandom(seed || undefined);
  const adjectiveIndex = indexFromValue(rng(), usernameParts.adjectives.length);
  const nounIndex = indexFromValue(rng(), usernameParts.nouns.length);
  const numOfDigits = transformValue(rng(), 0, 4);
  const firstName = usernameParts.adjectives.list[adjectiveIndex];
  const lastName = usernameParts.nouns.list[nounIndex];
  let number = "";
  for (let i = 0; i <= numOfDigits; i++) {
    const digit = transformValue(rng(), 0, 9);
    number += digit.toString();
  }
  return new UserName({firstName, lastName, number}, rng);
}


module.exports.generateUsername = generateUsername;
module.exports.UserName = UserName;
