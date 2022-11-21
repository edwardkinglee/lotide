const index = require('../index');

//Test Code
index.assertArraysEqual(index.without([1, 2, 3], [1]),[2,3]);
index.assertArraysEqual(index.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
index.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
index.assertArraysEqual(words, ["hello", "world", "lighthouse"]);