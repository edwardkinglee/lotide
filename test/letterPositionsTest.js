const assert = require('chai').assert;
const index = require('../index');

describe("#letterPositions", () => {
  it("returns { h: [0], e: [1], l: [2, 3] ,o: [4] } for 'hello'", () => {
    assert.deepEqual(index.letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("returns { l: [ 0 ], i: [ 1 ], g: [ 2 ], h: [ 3, 5 ], t: [ 4 ], o: [ 6 ], u: [ 7 ], s: [ 8 ], e: [ 9 ] } for 'lighthouse'", () => {
    assert.deepEqual(index.letterPositions('lighthouse'), { l: [0], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8], e: [9] });
  });

  it("returns { l: [ 0 ], a: [ 1 ], b: [ 2 ], s: [ 3 ] } for 'labs'", () => {
    assert.deepEqual(index.letterPositions('labs'), { l: [ 0 ], a: [ 1 ], b: [ 2 ], s: [ 3 ] });
  });
});
