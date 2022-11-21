const index = require('../index');

const a = { a: { z: 1 }, b: 2 };
const b = { a: { z: 1 }, b: 2 };
index.assertObjectsEqual(index.eqObjects(a, b), true);//=> true

const c = { a: { y: 0, z: 1 }, b: 2 };
const d = { a: { z: 1 }, b: 2 };
index.assertObjectsEqual(index.eqObjects(c, d), false);// => false

const e = { a: { y: 0, z: 1 }, b: 2 };
const f = { a: 1, b: 2 };
index.assertObjectsEqual(index.eqObjects(e, f), false);// => false

const g = { a: { y: 0, z: 1 }, b: 2 };
const h = { a: { y: 0, z: 1, a: 0 }, b: 2 };
index.assertObjectsEqual(index.eqObjects(g, h), false);// => false

const i = { a: { y: 0, z: { a: 1 } }, b: 2 };
const j = { a: { y: 0, z: { a: 1 } }, b: 2 };
index.assertObjectsEqual(index.eqObjects(i, j), true);// => true

const k = { a: { y: 0, z: { a: 10 } }, b: 2 };
const l = { a: { y: 0, z: { a: 2 } }, b: 2 };
index.assertObjectsEqual(index.eqObjects(k, l), false);// => false

const m = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 } } };
const n = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 } } };
index.assertObjectsEqual(index.eqObjects(m, n), true);// => true

const o = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: 0 } } };
const p = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 6 } } };
index.assertObjectsEqual(index.eqObjects(o, p), false);// => false

const q = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: { i: { x: 9 } } } } };
const r = { a: { y: 0, z: { a: 2 } }, b: 2, c: { d: { e: 1 }, f: { g: 5, e: { i: { x: 9 } } } } };
index.assertObjectsEqual(index.eqObjects(q, r), true);// => true