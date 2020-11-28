const seedrandom = require('seedrandom');
const usernameParts = require('./words.json');
const ung = require('./ung');
ung.seedrandom = seedrandom;
ung.usernameParts = usernameParts;

module.exports = ung
