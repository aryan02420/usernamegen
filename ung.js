let UserName = class {
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
  const rng = this.seedrandom(seed || undefined) || Math.random;
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
  return new UserName({
    firstName,
    lastName,
    number
  }, rng);
}

module.exports.generateUsername = generateUsername;
module.exports.UserName = UserName;
module.exports.seedrandom = this.seedrandom || Math.random;
module.exports.usernameParts = {
  "nouns": {
    "list": ["hello"],
    "length": 1
  },
  "adjectives": {
    "list": ["world"],
    "length": 1
  }
}



// function generate() {
//   document.querySelector('#username').value=generateUsername().toString();
// }
// document.querySelector('#generate').addEventListener('click', (evt) => {
//   generate();
//   evt.preventDefault();
// });
// generate();
