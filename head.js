// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

const head = (array) => {
  return array.length !== 0 ? array[0] : undefined;
};

//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");