const expect = require('chai').expect
let ung = require('../');


describe('basics', () => {
  step('generateUsername returns an object', () => {
    expect(typeof ung.generateUsername() === 'object').to.be.true;
  });
  step('toString returns a string', () => {
    expect(typeof ung.generateUsername().toString() === 'string').to.be.true;
  });
  step('unique usernames without seed', () => {
    expect(ung.generateUsername().toString() !== ung.generateUsername().toString()).to.be.true;
  });
  step('fixed username when seed is provided', () => {
    expect(ung.generateUsername('a').toString() === 'inauthenticmarlberry55').to.be.true;
  });
});

describe('formatting', () => {
  var f = (fn, ln, n) => {
    return fn.toUpperCase();
  }
  step('passing inline formatter', () => {
    expect(ung.generateUsername('a').toString(f) === 'INAUTHENTIC').to.be.true;
  });
  step('inline formatter does not pollute global/default formatter', () => {
    expect(ung.generateUsername('a').toString() === 'inauthenticmarlberry55').to.be.true;
  });
  step('setting global/default formatter', () => {
    ung.UserName.formatter = (fn, ln, n) => {
      return ln.toUpperCase();
    }
    expect(ung.generateUsername('a').toString() === 'MARLBERRY').to.be.true;
  });
  step('inline formatter overrides global formatter', () => {
    ung.UserName.formatter = (fn, ln, n) => {
      return ln.toUpperCase();
    }
    expect(ung.generateUsername('a').toString(f) === 'INAUTHENTIC').to.be.true;
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
    expect(seq() !== seq()).to.be.true;
  });
  step('sequence returns a fixed random number sequence when seeded', () => {
    expect(
      seq2() === 0.6363726288676872 &&
      seq2() === 0.005222270723581011 &&
      seq2() === 0.33566655610801654
    ).to.be.true;
  });
});
