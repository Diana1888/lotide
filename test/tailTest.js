const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [5, 8, 10] for [2, 5, 8, 10]", () => {
    assert.deepEqual(tail([2, 5, 8, 10]), [5, 8, 10]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

});

