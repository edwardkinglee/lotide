// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;