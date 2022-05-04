const poseidonHash = require('circomlib').poseidon;

module.exports = {
    hash: function([left, right]) {
        return poseidonHash.hash([left, right]);
    }
};