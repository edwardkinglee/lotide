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

const flatten = (array) => {
  const newArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]