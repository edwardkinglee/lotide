const assert = require('chai').assert;
const index = require('../index');

describe("#findKey", () => {
  it("returns 'noma' for ({'Blue Hill': { stars: 1 },   'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 },'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x.stars === 2)", () => {
    const object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(index.findKey(object1, x => x.stars === 2), 'noma');
  });

  it("returns 'Akaleri' for ({'Blue Hill': { stars: 1 },   'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 },'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x.stars === 3)", () => {
    const object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(index.findKey(object1, x => x.stars === 3), 'Akaleri');
  });

  it("returns undefined for ({'Blue Hill': { stars: 1 },   'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 },'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x.stars === 5)", () => {
    const object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(index.findKey(object1, x => x.stars === 5), undefined);
  });
});