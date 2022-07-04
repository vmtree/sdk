const calculateNextRoot = require('./calculateNextRoot');
const generateProof = require('./generateProof');
const poseidon = require('./poseidon');

const { flattenProof, toProofInput } = require('./utils');

module.exports = async function fullProvePoseidon({
    zkeyFileName,
    wasmFileName,
    startIndex,
    leaves,
    startSubtrees,
}) {
    const { root, filledSubtrees } = calculateNextRoot({
        hasher: poseidon,
        startIndex,
        leaves,
        startSubtrees
    });
    const proofInput = toProofInput({
        newRoot: root,
        startIndex,
        startSubtrees,
        endSubtrees: filledSubtrees,
        leaves
    });
    const { proof, publicSignals } = await generateProof({
        input: proofInput,
        zkeyFileName,
        wasmFileName
    });
    const solidityInput = {
        newRoot,
        newSubtrees: endSubtrees,
        p: flattenProof(proof)
    }
    return { proof, publicSignals, solidityInput };
};