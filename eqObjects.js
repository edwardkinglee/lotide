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
        return console.log(`Assertion Failed \u274C: Objects don't have the same keys.`);
      }
      
      if (Array.isArray(object1[element])) {
        if (!eqArrays(object1[element], object2[element])) {
          return console.log(`Assertion Failed \u274C False: Objects don't match.`);
        }
      } else if (!object1[element] === object2[element]) {
        return console.log(`Assertion Failed \u274C False: Objects don't match.`);
      }
    }
    return console.log(`Assertion Passed \u2705 True: Object1 === Object2`);
  }
  return console.log(`Assertion Failed \u274C False: Objects don't match.`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
