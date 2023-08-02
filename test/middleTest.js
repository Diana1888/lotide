const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [7] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]);
  });

  it("returns [7, 8] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), [7, 8]);
  });

  it("returns ['world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(middle(['hello', 'world', 'lighthouse']), ['world']);
  });

  it("returns ['world', 'beautiful'] for ['hello', 'world', 'beautiful', 'lighthouse']", () => {
    assert.deepEqual(middle(['hello', 'world', 'beautiful', 'lighthouse']), ['world', 'beautiful']);
  });
});
