const { fullProve } = require('snarkjs').groth16;
const { toVmtMassUpdateProofInput } = require('./utils');

module.exports = async function calculateMassUpdateProof(
        wasmPath,
        zkeyPath,
        startIndex,
        leaves,
        startSubtrees,
        endSubtrees
    ) {
    return fullProve(
        toVmtMassUpdateProofInput(
            startIndex,
            leaves,
            startSubtrees,
            endSubtrees
        ),
        wasmPath,
        zkeyPath
    );
};