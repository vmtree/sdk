const { expect } = require('chai');
const {
    calculateNextRoot,
    mimcSponge,
    poseidon,
    utils,
    MerkleTree
} = require('../index');

describe("calculateNextRoot", function() {
    before(() => {
        this.leaves = utils.unsafeRandomLeaves(16);
    });

    it('should match the MiMC MerkleTree root', () => {
        const mimcMerkleTree = new MerkleTree({ hasher: mimcSponge, leaves: this.leaves });
        const { root: mimcCalculateNextRoot } = calculateNextRoot({ hasher: mimcSponge, leaves: this.leaves });
        expect(mimcCalculateNextRoot).to.be.equal(mimcMerkleTree.root);
    });

    it('should match the Poseidon MerkleTree root', () => {
        const poseidonMerkleTree = new MerkleTree({ hasher: poseidon, leaves: this.leaves });
        const { root: poseidonCalculateNextRoot } = calculateNextRoot({ hasher: poseidon, leaves: this.leaves });
        expect(poseidonCalculateNextRoot).to.be.equal(poseidonMerkleTree.root);
    });
});