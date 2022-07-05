const calculateNextRoot = require('./calculateNextRoot');
const generateProof = require('./generateProof');
const hasher = require('./poseidon');

const { flattenProof, toProofInput } = require('./utils');

module.exports = async function fullProvePoseidon({
    zkeyFileName,
    wasmFileName,
    baseString = 'twister',
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
        console.log(newRoot, endSubtrees);
        const input = toProofInput({
            newRoot,
            startIndex,
            startSubtrees,
            endSubtrees,
            leaves
        });
        console.log(input);
        try {
            var { proof, publicSignals } = await generateProof({
                input,
                zkeyFileName,
                wasmFileName
            });
        } catch (err) {
            console.log(err);
        }
        console.log(proof);
        const solidityInput = {
            newRoot,
            newSubtrees: endSubtrees,
            p: flattenProof(proof)
        };
        console.log(solidityInput);
        return { proof, publicSignals, solidityInput };
    } catch(err) {
        console.log(err);
    }
};