const index = require('../index');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = index.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

index.assertEqual(result1["Jason"], 1);
index.assertEqual(result1["Karima"], undefined);
index.assertEqual(result1["Fang"], 2);
index.assertEqual(result1["Agouhanna"], undefined);