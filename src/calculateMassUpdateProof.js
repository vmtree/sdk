const { fullProve } = require('snarkjs').groth16;
const { toVmtUpdateProofInput } = require('./utils');

module.exports = async function calculateMassUpdateProof(
        wasmPath,
        zkeyPath,
        startIndex,
        leaves,
        startSubtrees,
        endSubtrees
    ) {
    return fullProve(
        toVmtUpdateProofInput(
            startIndex,
            leaves,
            startSubtrees,
            endSubtrees
        ),
        wasmPath,
        zkeyPath
    );
};