const { toFE, zeros } = require('./utils');

module.exports = function calculateSubtrees(
    hasher,
    levels,
    startIndex,
    leaves,
    currentSubtrees
) {
    if (typeof currentSubtrees === 'undefined') {
        var nextSubtrees = zeros.slice(0, levels).map(toFE);
    } else {
        nextSubtrees = currentSubtrees.map(toFE);
    };

    for (let i = 0; i < leaves.length; i++) {
        let currentIndex = i + startIndex,
            currentLevelHash = toFE(leaves[i])
            ;
        for (let j = 0; j < levels; j++) {
            let right = 0;
            if (Math.floor(currentIndex % 2) == 0) {
                nextSubtrees[j] = currentLevelHash;
                right = zeros[j];
            } else {
                right = currentLevelHash;
            };
            currentLevelHash = hasher.hash([nextSubtrees[j], right]);
            currentIndex = Math.floor(currentIndex / 2);
        };
    };
    return nextSubtrees;
};