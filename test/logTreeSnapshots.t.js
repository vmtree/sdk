const {
    calculateSubtrees,
    mimcSponge,
    utils
} = require('../index');

(function () {
    const randomLeaves = utils.unsafeRandomLeaves(10);
    const initialTrees = calculateSubtrees(mimcSponge, 20, []);
    const treeSnapshots = [initialTrees];
    randomLeaves.forEach((leaf, index) => treeSnapshots.push(
        calculateSubtrees(mimcSponge, 20, [leaf], treeSnapshots[index], index)
    ));
    console.log(treeSnapshots);
})()