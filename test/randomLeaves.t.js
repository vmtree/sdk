const { unsafeRandomLeaves } = require('../src/utils');
const leaves = unsafeRandomLeaves(20);
console.log(leaves.map(a => a.toString()));