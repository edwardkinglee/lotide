const index = require('../index');

const words = ["ground", "control", "to", "major", "tom"];

index.assertArraysEqual(index.map(words, function(item) {
  return item[0];
}),[ 'g', 'c', 't', 'm', 't' ]);

index.assertArraysEqual(index.map(words, function(item) {
  return item.slice(1);
}),[ 'round', 'ontrol', 'o', 'ajor', 'om' ]);

index.assertArraysEqual(index.map(words, function(item) {
  return item + 's';
}),[ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);