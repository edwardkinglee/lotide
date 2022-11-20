const eqArrays = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);
//check if object
const isObject = (object) => {
  return object !== null && typeof object === "object";
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false
const eqObjects = function(object1, object2) {
  const objOneLength = Object.keys(object1).length;
  const objTwoLength = Object.keys(object2).length;

  const object1keys = Object.keys(object1);
  const object2keys = Object.keys(object2);

  if (objOneLength === objTwoLength) {
    for (let element of object1keys) {
      //if object2 doesn't have the same keys as object1 return false
      if (!object2keys.includes(element)) {
        return false;
      }
      //console.log('isObject1 a object', isObject(object1[element]));
      //console.log('isObject2 a object', isObject(object2[element]));
      //console.log('object1', object1[element], 'object2', object2[element]);
      if (Array.isArray(object1[element])) {
        if (!eqArrays(object1[element], object2[element])) {
          return false;
        }
        //added check to make sure !isObject is false so it only compares values
      } else if (object1[element] !== object2[element] && !isObject(object1[element]) && !isObject(object2[element])) {
        //console.log('object 1 !== object 2');
        return false;
        //added to check if object1[element] or isObject2[element]
      } else if (isObject(object1[element]) || isObject(object2[element])) {
        //console.log('inside else if isObject');
        eqObjects(object1[element], object2[element]);
      }

    }
    return true;
  }
  //if object1 length !== object2 length returns false
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const a = { a: { z: 1 }, b: 2 };
const b = { a: { z: 1 }, b: 2 };
assertObjectsEqual(eqObjects(a, b), true);//=> true

const c = { a: { y: 0, z: 1 }, b: 2 };
const d = { a: { z: 1 }, b: 2 };
assertObjectsEqual(eqObjects(c, d), false);// => false

const e = { a: { y: 0, z: 1 }, b: 2 };
const f = { a: 1, b: 2 };
assertObjectsEqual(eqObjects(e, f), false);// => false

const g = { a: { y: 0, z: 1 }, b: 2 };
const h = { a: { y: 0, z: 1, a: 0 }, b: 2 };
assertObjectsEqual(eqObjects(g, h), false);// => false

const i = { a: { y: 0, z: { a: 1 } }, b: 2 };
const j = { a: { y: 0, z: { a: 1 } }, b: 2 };
assertObjectsEqual(eqObjects(i, j), true);// => true

const k = { a: { y: 0, z: { a: 10 } }, b: 2 };
const l = { a: { y: 0, z: { a: 2 } }, b: 2 };
assertObjectsEqual(eqObjects(k, l), false);// => false

const m = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 } } };
const n = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 } } };
assertObjectsEqual(eqObjects(m, n), true);// => true

const o = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: 0 } } };
const p = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 6 } } };
assertObjectsEqual(eqObjects(o, p), false);// => false

const q = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: { i: { x: 9 } } } } };
const r = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: { i: { x: 9 } } } } };
assertObjectsEqual(eqObjects(q, r), true);// => true