const { unsafeRandomLeaves } = require('../src/utils');
const leaves = unsafeRandomLeaves(20);

/**
 * Neither of these test files are unit tests, just scripts I used once or twice
*/
console.log(leaves.map(a => a.toString()));