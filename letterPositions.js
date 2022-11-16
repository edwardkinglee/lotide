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
  
const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split('');

  sentenceArray.forEach((letter, index) => {
    
    // eslint-disable-next-line no-prototype-builtins
    if (results.hasOwnProperty(letter)) {
      results[letter].push(index);
    } else if (letter !== ' ') {
      results[letter] = [index];
    }
     
  });
  return results;
};

const result1 = letterPositions('hello');

//Test Code
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2,3]);
assertArraysEqual(result1['o'], [4]);

