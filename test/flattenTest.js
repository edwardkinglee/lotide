const assert = require('chai').assert;
const index = require('../index');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(index.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for [1, 2, [3, 4], 5, [6], [7,8]]", () => {
    assert.deepEqual(index.flatten([1, 2, [3, 4], 5, [6], [7,8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for [1, 2, [3, 4, 5], [6], [7,8]]", () => {
    assert.deepEqual(index.flatten([1, 2, [3, 4, 5], [6], [7,8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [[1, 2, 3, 4], 5, [6], [7, 8, 9]]", () => {
    assert.deepEqual(index.flatten([[1, 2, 3, 4], 5, [6], [7, 8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});