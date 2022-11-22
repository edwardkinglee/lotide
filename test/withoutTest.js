const assert = require('chai').assert;
const index = require('../index');

describe("#without", () => {
  it("returns [2,3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(index.without([1, 2, 3], [1]), [2,3]);
  });

  it("returns ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(index.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});