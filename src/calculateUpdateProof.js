const { fullProve } = require('snarkjs').groth16;
const { toVmtSingleInput } = require('./utils');

module.exports = async function calculateUpdateProof(
        wasmPath,
        zkeyPath,
        index,
        leaf,
        startSubtrees,
        endSubtrees
    ) {
    return fullProve(
        toVmtSingleInput(
            index,
            leaf,
            startSubtrees,
            endSubtrees
        ),
        wasmPath,
        zkeyPath
    );
};