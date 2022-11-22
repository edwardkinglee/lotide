const assert = require('chai').assert;
const index = require('../index');

describe("#takeUntilTest", () => {

  it("returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(index.takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns [ 'I've', 'been', 'to', 'Hollywood' ] for (['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(index.takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});