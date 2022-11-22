const assert = require('chai').assert;
const index = require('../index');

describe("#findKeyByValue", () => {
  it("returns 'drama' for ({sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama: 'The Wire'} , 'The Wire') ", () => {

    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.deepEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("returns 'sci_fi' for ({sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama: 'The Wire'} , 'The Expanse') ", () => {

    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.deepEqual(index.findKeyByValue(bestTVShowsByGenre, "The Expanse"),'sci_fi');
  });

  it("returns 'comedy' for ({sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama: 'The Wire'} , 'Brooklyn Nine-Nine') ", () => {

    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.deepEqual(index.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),'comedy');
  });

});