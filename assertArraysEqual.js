const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`\u2705\u2705\u2705Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`\u274C\u274C\u274C Arrays are not equal: [${array1}] !== [${array2}]`);
  }
};
  
module.exports = assertArraysEqual;

//Test Code
assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual([1,2,2,3,4], [1,2,3,4,5]);
assertArraysEqual(['c','b','a'], ['a','b','c']);