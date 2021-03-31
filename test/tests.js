const expect = require('chai').expect
var UNG = require('../');
ung = new UNG();

describe('basics', () => {
  step('generateUsername returns an object', () => {
    expect(ung.generateUsername()).to.be.an.instanceOf(Object);
  });
  step('toString returns a string', () => {
    expect(typeof ung.generateUsername().toString() === 'string').to.be.true;
  });
  step('unique usernames without seed', () => {
    expect(ung.generateUsername().toString()).to.not.equal(ung.generateUsername().toString());
  });
  step('fixed username when seed is provided', () => {
    expect(ung.generateUsername('a').toString()).to.equal('inauthenticmarlberry55');
  });
});

describe('formatting', () => {
  var f = (fn, ln, n) => {
    return fn.toUpperCase();
  }
  step('passing inline formatter', () => {
    expect(ung.generateUsername('a').toString(f)).to.equal('INAUTHENTIC');
  });
  step('inline formatter does not pollute global/default formatter', () => {
    expect(ung.generateUsername('a').toString()).to.equal('inauthenticmarlberry55');
  });
  step('setting global/default formatter', () => {
    ung.UserName.formatter = (fn, ln, n) => {
      return ln.toUpperCase();
    }
    expect(ung.generateUsername('a').toString()).to.equal('MARLBERRY');
  });
  step('inline formatter overrides global formatter', () => {
    ung.UserName.formatter = (fn, ln, n) => {
      return ln.toUpperCase();
    }
    expect(ung.generateUsername('a').toString(f)).to.equal('INAUTHENTIC');
  });
});

describe('extending', () => {
  var seq = ung.generateUsername().sequence;
  var seq2 = ung.generateUsername('a').sequence;
  step('sequence is a function', () => {
    expect(typeof seq === 'function').to.be.true;
  });
  step('sequence returns a number', () => {
    expect(typeof seq() === 'number').to.be.true;
  });
  step('sequence returns random number at each call', () => {
    expect(seq()).to.not.equal(seq());
  });
  step('sequence returns a fixed random number sequence when seeded', () => {
    expect(seq2()).to.equal(0.6363726288676872);
    expect(seq2()).to.equal(0.005222270723581011);
    expect(seq2()).to.equal(0.33566655610801654);
  });
});

describe('multiple generators', () => {
  ung2 = new UNG();
  ung2.usernameParts = {
        "nouns": {
          "list": ["world", "universe"],
          "length": 2
        },
        "adjectives": {
          "list": ["hello", "hey"],
          "length": 2
        }
      }
  ung3 = new UNG();
  step('independent username parts', () => {
    expect(ung2.generateUsername('a').toString()).to.equal('hellouniverse55');
  });
  step('independent inline formatter', () => {
    var f = (fn, ln, n) => {
      return fn.toUpperCase();
    }
    expect(ung2.generateUsername('a').toString(f)).to.equal('HELLO');
  });
  step('independent global formatter', () => {
    ung2.UserName.formatter = (fn, ln, n) => {
      return ln.toUpperCase();
    }
    expect(ung2.generateUsername('a').toString()).to.equal('UNIVERSE');
  });
  step('other ung is not affected', () => {
    expect(ung3.generateUsername('a').toString()).to.equal('inauthenticmarlberry55');
  });
});
