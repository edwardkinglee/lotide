const assert = require('chai').assert;
const index = require('../index');

describe("#countOnly", () => {
  it("returns {Fang: 2, Jason: 1} for (['Karl', 'Salima', 'Agouhanna', 'Fang','Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false })", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(index.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });

  it("returns  Agouhanna: 1, Fang: 2 } for (['Karl', 'Salima', 'Agouhanna', 'Fang','Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { 'Jason': false, 'Karima': true, 'Fang': true, 'Agouhanna': true}))", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(index.countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": true }), { Agouhanna: 1, Fang: 2 });
  });

  it("returns  { Edward: 2 } for (['Karl', 'Salima', 'Agouhanna', 'Fang','Kavith', 'Edward', 'Salima', 'Fang', 'Joe', 'Edward'], { 'Jason': false, 'Karima': true, 'Fang': true, 'Agouhanna': false, 'Edward': true }))", () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Edward',
      'Salima',
      'Fang',
      'Joe',
      'Edward'
    ];
    assert.deepEqual(index.countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": false, "Agouhanna": false, 'Edward': true }), { Edward: 2 });
  });
});