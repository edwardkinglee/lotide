const assert = require('chai').assert;
const index = require('../index');

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom'], function(item) { return item[0];})", () => {

    const words = ["ground", "control", "to", "major", "tom"];

    assert.deepEqual(index.map(words, function(item) {
      return item[0];
    }),
    [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("[ 'round', 'ontrol', 'o', 'ajor', 'om' ] for ['ground', 'control', 'to', 'major', 'tom'], function(item) { return item.slice(1);})", () => {

    const words = ["ground", "control", "to", "major", "tom"];

    assert.deepEqual(index.map(words, function(item) {
      return item.slice(1);
    }),
    [ 'round', 'ontrol', 'o', 'ajor', 'om' ]);
  });

  it("returns ['grounds', 'controls', 'tos', 'majors', 'toms' ] for ['ground', 'control', 'to', 'major', 'tom'], function(item) { return item + 's';})", () => {

    const words = ["ground", "control", "to", "major", "tom"];

    assert.deepEqual(index.map(words, function(item) {
      return item + 's';
    }),
    ['grounds', 'controls', 'tos', 'majors', 'toms' ]);
  });

});