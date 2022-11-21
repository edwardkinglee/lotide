const assertArraysEqual = require('../assertArraysEqual');

//Test Code
assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual([1,2,2,3,4], [1,2,3,4,5]);
assertArraysEqual(['c','b','a'], ['a','b','c']);