const eqArrays = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`Arrays are equal \u2705: [${array1}] === [${array2}]`);
  } else {
    console.log(`Arrays are not equal \u274C: [${array1}] !== [${array2}]`);
  }
};
  
//Test Code
assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual([1,2,2,3,4], [1,2,3,4,5]);
assertArraysEqual(['a','b','c'], ['a','b','c']);