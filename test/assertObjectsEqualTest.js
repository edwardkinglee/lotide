const index = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
index.assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
index.assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
index.assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
index.assertObjectsEqual(cd, cd2); // => false