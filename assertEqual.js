// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274CAssertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;