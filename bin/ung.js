#!/usr/bin/env node
const ung = require('../')

const args = process.argv.slice(2);
const seed = args[0] || undefined;

console.log(ung.generateUsername(seed));
