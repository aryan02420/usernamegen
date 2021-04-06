#!/usr/bin/env node
const UNG = require('../');
ung = new UNG();

const args = process.argv.slice(2);
const seed = args[0];

console.log(ung.generateUsername(seed).toString());
