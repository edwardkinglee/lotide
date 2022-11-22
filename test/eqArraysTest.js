const assert = require('chai').assert;
const index = require('../index');

describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]] === [[2, 3], [4]]", () => {
    assert.deepEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for [[2, 3], [4]] === [[2, 3], [4, 5]]", () => {
    assert.deepEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false for [[2, 3], [4]] === [[2, 3], 4])", () => {
    assert.deepEqual(index.eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});