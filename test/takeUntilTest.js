const index = require('../index');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = index.takeUntil(data1, x => x < 0);
index.assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = index.takeUntil(data2, x => x === ',');
index.assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

/*Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/