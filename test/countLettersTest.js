const assert = require('chai').assert;
const index = require('../index');

describe("#countLetters", () => {
  it("returns 2 for ('LHL') letter ['L']", () => {
    const result1 = index.countLetters('LHL');
    assert.deepEqual((result1['L']), 2);
  });

  it("returns 1 for ('LHL') letter ['H']", () => {
    const result1 = index.countLetters('LHL');
    assert.deepEqual(result1['H'], 1);
  });

  it("returns 1 for ('lighthouse in the house') letter ['l']", () => {
    const result2 = index.countLetters("lighthouse in the house");
    assert.deepEqual(result2['l'], 1);
  });

  it("returns 2 for ('lighthouse in the house') letter ['i']", () => {
    const result2 = index.countLetters("lighthouse in the house");
    assert.deepEqual(result2['i'], 2);
  });

  it("returns 1 for ('lighthouse in the house') letter ['g']", () => {
    const result2 = index.countLetters("lighthouse in the house");
    assert.deepEqual(result2['g'], 1);
  });
});