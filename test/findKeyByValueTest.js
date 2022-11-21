const index = require('../index');

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);