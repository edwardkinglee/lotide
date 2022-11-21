const assert = require('chai').assert;
const index = require('../index');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(index.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(index.tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });

  it("returns ['tail', 'test'] for [2, 'tail', 'test']", () => {
    assert.deepEqual(index.tail([2, 'tail', 'test']), ['tail', 'test']);
  });

});