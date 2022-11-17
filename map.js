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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, function(item) {
  return item[0];
}),[ 'g', 'c', 't', 'm', 't' ]);

assertArraysEqual(map(words, function(item) {
  return item.slice(1);
}),[ 'round', 'ontrol', 'o', 'ajor', 'om' ]);

assertArraysEqual(map(words, function(item) {
  return item + 's';
}),[ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);