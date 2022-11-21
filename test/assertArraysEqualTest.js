const index = require('../index');

//Test Code
index.assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
index.assertArraysEqual([1,2,2,3,4], [1,2,3,4,5]);
index.assertArraysEqual(['c','b','a'], ['a','b','c']);