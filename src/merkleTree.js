const { MerkleTree: FixedMerkleTree } = require("fixed-merkle-tree");
const { getZero } = require('./utils');

module.exports = class MerkleTree extends FixedMerkleTree {
    constructor({ hasher, levels = 20, leaves = [], baseString = "empty" }) {
        super(levels, leaves, {
            hashFunction: (left, right) => hasher([left, right]),
            zeroElement: getZero(baseString),
        });
    };
};