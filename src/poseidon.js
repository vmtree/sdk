const poseidonHash = require('circomlib').poseidon;

module.exports = function poseidon([left, right]) {
    return poseidonHash.hash([left, right]);
};