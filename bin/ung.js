#!/usr/bin/env node
const UNG = require('../')
// const seedrandom = require('seedrandom');
// const usernameParts = require('../words.json');

ung = new UNG();
// ung.rng = seedrandom;
// ung.usernameParts = usernameParts;

const args = process.argv.slice(2);
const seed = args[0] || undefined;
const num = Math.abs(parseInt(args[1])) || 1;

for (let i = 0; i < num; i++) {
	console.log(ung.generateUsername(seed).toString());
}
