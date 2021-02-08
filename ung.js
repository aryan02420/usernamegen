(function(exports) {

  // your code goes here


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



  class UNG {
    constructor({
      rng,
      parts,
      formatter
    } = {}) {
      this.rng = rng || null;
      this.usernameParts = parts || {
        "nouns": {
          "list": ["hello", "hola"],
          "length": 2
        },
        "adjectives": {
          "list": ["world", "universe"],
          "length": 2
        }
      }
      this.UserName = class UserName {
        static formatter = formatter || ((fn, ln, n) => `${fn}${ln}${n}`);
        constructor(nameParts, seq) {
          this.fullName = nameParts;
          this.sequence = seq;
        }
        toString(format = UserName.formatter) {
          return format(this.fullName.firstName, this.fullName.lastName, this.fullName.number);
        }
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




  exports.UNG = UNG;


  // exports.test = function() {
  //   return 'hello world'
  // };

})(typeof exports === 'undefined' ? this['ung'] = {} : exports);







// function generate() {
//   document.querySelector('#username').value=generateUsername().toString();
// }
// document.querySelector('#generate').addEventListener('click', (evt) => {
//   generate();
//   evt.preventDefault();
// });
// generate();
