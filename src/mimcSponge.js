const mimcSpongeHash = require('circomlib').mimcsponge;

module.exports = function mimcSponge([left, right]) {
    return mimcSpongeHash.multiHash([left, right]);
};