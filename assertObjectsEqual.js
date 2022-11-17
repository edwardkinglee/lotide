const eqArrays = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objOneLength = Object.keys(object1).length;
  const objTwoLength = Object.keys(object2).length;

  const object1keys = Object.keys(object1);
  const object2keys = Object.keys(object2);

  if (objOneLength === objTwoLength) {
    for (let element of object1keys) {
      if (object2keys.includes(element) === false) {
        return false;
      }
      
      if (Array.isArray(object1[element])) {
        if (!eqArrays(object1[element], object2[element])) {
          return false;
        }
      } else if (!object1[element] === object2[element]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false