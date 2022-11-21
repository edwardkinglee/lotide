const index = require('../index');

const result1 = index.letterPositions('hello');

//Test Code
index.assertArraysEqual(result1['h'], [0]);
index.assertArraysEqual(result1['e'], [1]);
index.assertArraysEqual(result1['l'], [2,3]);
index.assertArraysEqual(result1['o'], [4]);
