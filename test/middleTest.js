const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
//TEST CODE

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), [7, 8]);
assertArraysEqual(middle(["hello", "world", "lighthouse"]), ["world"]);
assertArraysEqual(middle(["hello", "world", "beautiful", "lighthouse"]), ["world", "beautiful"]);