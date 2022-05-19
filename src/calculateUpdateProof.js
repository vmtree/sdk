const { fullProve } = require('snarkjs').groth16;
const { toVmtUpdateProofInput } = require('./utils');

module.exports = async function calculateUpdateProof(
        wasmPath,
        zkeyPath,
        index,
        leaf,
        startSubtrees,
        endSubtrees
    ) {
    return fullProve(
        toVmtUpdateProofInput(
            index,
            leaf,
            startSubtrees,
            endSubtrees
        ),
        wasmPath,
        zkeyPath
    );
};