const mimcSpongeHash = require('circomlib').mimcsponge;

module.exports = {
    hash: function([left, right]) {
        return mimcSpongeHash.multiHash([left, right]);
    }
};