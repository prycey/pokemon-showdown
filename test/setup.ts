// This file runs before all tests
// Add any global test setup here

// Bun test compatibility layer for Mocha tests
const {
  describe: bunDescribe,
  test: bunTest,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} = require('bun:test');

// @ts-ignore - add globals for compatibility with existing tests
globalThis.describe = bunDescribe;
// @ts-ignore
globalThis.it = bunTest;
// @ts-ignore
globalThis.beforeEach = beforeEach;
// @ts-ignore
globalThis.afterEach = afterEach;
// @ts-ignore
globalThis.before = beforeAll;
// @ts-ignore
globalThis.after = afterAll;
