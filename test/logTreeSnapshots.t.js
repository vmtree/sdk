const {
    calculateSubtrees,
    mimcSponge,
    utils
} = require('../index');

(function () {
    const randomLeaves = utils.unsafeRandomLeaves(10);
    const initialTrees = calculateSubtrees(mimcSponge, 20, []);
    const treeSnapshots = [initialTrees];
    randomLeaves.forEach(
        (leaf, startIndex) => 
            treeSnapshots.push(calculateSubtrees(
                mimcSponge,
                20,
                startIndex,
                [leaf],
                treeSnapshots[index]
            ))
    );
    console.log(treeSnapshots);
})()