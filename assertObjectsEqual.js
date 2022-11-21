const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;