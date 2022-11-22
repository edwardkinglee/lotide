const assert = require('chai').assert;
const index = require('../index');

describe("#eqObjects", () => {
  it("returns true for { a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }", () => {
    const a = { a: { z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };

    assert.deepEqual(index.eqObjects(a, b), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }", () => {
    const c = { a: { y: 0, z: 1 }, b: 2 };
    const d = { a: { z: 1 }, b: 2 };

    assert.deepEqual(index.eqObjects(c, d), false);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } === { a: 1, b: 2 }", () => {
    const e = { a: { y: 0, z: 1 }, b: 2 };
    const f = { a: 1, b: 2 };

    assert.deepEqual(index.eqObjects(e, f), false);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } === { a: { y: 0, z: 1, a: 0 }, b: 2 }", () => {
    const g = { a: { y: 0, z: 1 }, b: 2 };
    const h = { a: { y: 0, z: 1, a: 0 }, b: 2 };

    assert.deepEqual(index.eqObjects(g, h), false);
  });

  it("returns true for {{ a: { y: 0, z: { a: 1 } }, b: 2 } === { a: { y: 0, z: { a: 1 } }, b: 2 }", () => {
    const i = { a: { y: 0, z: { a: 1 } }, b: 2 };
    const j = { a: { y: 0, z: { a: 1 } }, b: 2 };

    assert.deepEqual(index.eqObjects(i, j), true);
  });

  it("returns true for { a: { y: 0, z: { a: 1, b: {c: 2}} }, b: 2 } === { a: { y: 0, z: { a: 1, b: {c: 2}} }, b: 2 }", () => {
    const k = { a: { y: 0, z: { a: 1, b: {c: 2}} }, b: 2 };
    const l = { a: { y: 0, z: { a: 1, b: {c: 2}} }, b: 2 };

    assert.deepEqual(index.eqObjects(k, l), true);
  });

  it("returns true for { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 } === { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 }", () => {
    const m = { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 };
    const n = { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 };

    assert.deepEqual(index.eqObjects(m, n), true);
  });

  it("returns false for { a: { y: 0, z: { a: 1, b: {c: {e: 1}}} }, b: 2 } === { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 }", () => {
    const o = { a: { y: 0, z: { a: 1, b: {c: {e: 1}}} }, b: 2 };
    const p = { a: { y: 0, z: { a: 1, b: {c: {e: 3}}} }, b: 2 };

    assert.deepEqual(index.eqObjects(o, p), false);
  });
});