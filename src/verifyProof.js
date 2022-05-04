const { verify } = require('snarkjs').groth16;

module.exports = async function verifyProof(verifier, publicSignals, proof) {
    return verify(verifier, publicSignals, proof);
}