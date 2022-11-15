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

const without = (source, itemsToRemove) => {
  const withoutArray = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      withoutArray.push(element);
    }
  }

  return withoutArray;
};

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
//Test Code
assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
