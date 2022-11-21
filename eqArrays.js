const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index in array1) {
    if (Array.isArray(array1[index])) {
      if (!(eqArrays(array1[index], array2[index]))) {
        return false;
      }
    } else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
