const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  
  for (let element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
  return undefined;
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object1, x => x.stars === 2), 'noma');// => "noma"
assertEqual(findKey(object1, x => x.stars === 3), 'Akaleri');// => "Akaleri"
assertEqual(findKey(object1, x => x.stars === 5), undefined);// => undefined