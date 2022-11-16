// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const letterCount = {};

  for (const letter of sentence) {
    // eslint-disable-next-line no-prototype-builtins
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

const result1 = countLetters('LHL');
const result2 = countLetters("lighthouse in the house");
//assertEqual for result1
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);
//assertEqual for result2
assertEqual(result2['l'], 1);
assertEqual(result2['i'], 2);
assertEqual(result2['g'], 1);
assertEqual(result2['h'], 4);
assertEqual(result2['t'], 2);
assertEqual(result2['o'], 2);
assertEqual(result2['u'], 2);
assertEqual(result2['s'], 2);
assertEqual(result2['e'], 3);
assertEqual(result2['n'], 1);
