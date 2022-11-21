const index = require('../index');

index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false