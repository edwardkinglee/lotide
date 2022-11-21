const index = require('../index');

const result1 = index.countLetters('LHL');
const result2 = index.countLetters("lighthouse in the house");
//assertEqual for result1
index.assertEqual(result1['L'], 2);
index.assertEqual(result1['H'], 1);
//assertEqual for result2
index.assertEqual(result2['l'], 1);
index.assertEqual(result2['i'], 2);
index.assertEqual(result2['g'], 1);
index.assertEqual(result2['h'], 4);
index.assertEqual(result2['t'], 2);
index.assertEqual(result2['o'], 2);
index.assertEqual(result2['u'], 2);
index.assertEqual(result2['s'], 2);
index.assertEqual(result2['e'], 3);
index.assertEqual(result2['n'], 1);