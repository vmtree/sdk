const calculateNextRoot = require('./calculateNextRoot');
const generateProof = require('./generateProof');
const hasher = require('./poseidon');

const { flattenProof, toProofInput } = require('./utils');

module.exports = async function fullProvePoseidon({
    zkeyFileName,
    wasmFileName,
    baseString,
    startIndex,
    startSubtrees,
    leaves,
}) {
    try {
        const { root: newRoot, filledSubtrees: endSubtrees } = calculateNextRoot({
            baseString,
            hasher,
            startIndex,
            startSubtrees,
            leaves,
        });
        const { proof, publicSignals } = await generateProof({
            input: toProofInput({
                newRoot,
                startIndex,
                startSubtrees,
                endSubtrees,
                leaves
            }),
            zkeyFileName,
            wasmFileName
        });
        const solidityInput = {
            newRoot,
            newSubtrees: endSubtrees,
            p: flattenProof(proof)
        };
        return { proof, publicSignals, solidityInput };
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
};