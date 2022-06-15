const { toFE, zeros } = require('./utils');

module.exports = function calculateSubtreesV2({
    hasher,
    levels = 20,
    startIndex = 0,
    leaves = [],
    startSubtrees
}) {
    if (typeof startSubtrees === 'undefined') {
        var endSubtrees = zeros.slice(0, levels).map(toFE);
    } else {
        endSubtrees = startSubtrees.map(toFE);
    };

    for (let i = 0; i < leaves.length; i++) {
        let currentIndex = i + startIndex,
            currentLevelHash = toFE(leaves[i])
            ;
        for (let j = 0; j < levels; j++) {
            let right = 0;
            if (Math.floor(currentIndex % 2) == 0) {
                endSubtrees[j] = currentLevelHash;
                right = zeros[j];
            } else {
                right = currentLevelHash;
            };
            currentLevelHash = hasher.hash([endSubtrees[j], right]);
            currentIndex = Math.floor(currentIndex / 2);
        };
    };
    return endSubtrees;
};