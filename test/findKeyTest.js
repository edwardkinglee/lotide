const index = require('../index');

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

index.assertEqual(index.findKey(object1, x => x.stars === 2), 'noma');// => "noma"
index.assertEqual(index.findKey(object1, x => x.stars === 3), 'Akaleri');// => "Akaleri"
index.assertEqual(index.findKey(object1, x => x.stars === 5), undefined);// => undefined